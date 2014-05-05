(ns feeds.topology
  "Topology

More info on the Clojure DSL here:

https://github.com/nathanmarz/storm/wiki/Clojure-DSL"
  (:require [feeds
             ;[spouts :refer [type-spout]]
             [spouts :refer [event-spout]]
             ; [bolts :refer [stormy-bolt fetish-storm-bolt]]]
             [bolts :refer [active-user-bolt follow-bolt feed-bolt]]]
             [backtype.storm [clojure :refer [topology spout-spec bolt-spec]] [config :refer :all]])

  (:import [backtype.storm LocalCluster LocalDRPC]))

;;(defn storm-topology []
;;  (topology
;;   {"spout" (spout-spec type-spout)}
;;
;;   {"stormy-bolt" (bolt-spec {"spout" ["type"]} stormy-bolt :p 2)
;;    "fetish-storm-bolt" (bolt-spec {"stormy-bolt" :shuffle} fetish-storm-bolt :p 2)}))


(defn storm-topology []
  (topology
   {"events" (spout-spec event-spout)}

   {"active users" (bolt-spec {"events" :shuffle} active-user-bolt :p 2)
    "follows" (bolt-spec {"active users" :shuffle} follow-bolt :p 2)
    "feeds" (bolt-spec {"follows" ["user"]} feed-bolt :p 2)}))

(defn run! [& {debug "debug" workers "workers" :or {debug "true" workers "2"}}]
  (doto (LocalCluster.)
    (.submitTopology "fetish feed"
                     {TOPOLOGY-DEBUG (Boolean/parseBoolean debug)
                      TOPOLOGY-WORKERS (Integer/parseInt workers)}
                     (storm-topology))))
