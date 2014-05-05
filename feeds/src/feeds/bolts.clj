(ns feeds.bolts
  "Bolts.

More info on the Clojure DSL here:

https://github.com/nathanmarz/storm/wiki/Clojure-DSL"
  (:require [backtype.storm [clojure :refer [emit-bolt! defbolt ack! bolt]]]
            [taoensso.carmine :as car :refer (wcar)]
            [taoensso.nippy :as nippy]))


(def redis-connection {:pool {:max-active 8}
                       :spec {:host "localhost"
                              :port 6379
                              :timeout 4000}})

(defbolt stormy-bolt ["stormy"] [{type :type :as tuple} collector]
  (emit-bolt! collector [(case type
                           :regular "I'm regular Stormy!"
                           :bizarro "I'm bizarro Stormy!"
                           "I have no idea what I'm doing.")]
              :anchor tuple)
  (ack! collector tuple))

(defbolt fetish-storm-bolt ["message"] [{stormy :stormy :as tuple} collector]
  (emit-bolt! collector [(str "fetish-storm produced: "stormy)] :anchor tuple)
  (ack! collector tuple))

(defbolt active-user-bolt ["user" "event"] [{event "event" :as tuple} collector]
       (doseq [user [:jim :rob :karen :kaitlyn :emma :travis]]
    (emit-bolt! collector [user event]))
  (ack! collector tuple))

(defbolt follow-bolt ["user" "event"] {:prepare true}
  [conf context collector]
  (let [follows {:jim #{:rob :emma}
                 :rob #{:karen :kaitlyn :jim}
                 :karen #{:kaitlyn :emma}
                 :kaitlyn #{:jim :rob :karen :kaitlyn :emma :travis}
                 :emma #{:karen}
                 :travis #{:kaitlyn :emma :karen :rob}}]
    (bolt
     (execute [{user "user" event "event" :as tuple}]
              (when ((follows user) (:user event))
                (emit-bolt! collector [user event]))
              (ack! collector tuple)))))

(defbolt feed-bolt ["user" "event"] {:prepare true}
  [conf context collector]
  (let [feeds (atom {})]
    (bolt
     (execute [{user "user" event "event" :as tuple}]
              (swap! feeds #(update-in % [user] conj event))
              (println "Current feeds:")
              (clojure.pprint/pprint @feeds)
              ;;(wcar redis-connection (car/publish "feeds" @feeds))  ;; Insert into redis-connection
              (wcar redis-connection (car/publish "feeds" (car/hmset user event @feeds)))
              (ack! collector tuple)))))