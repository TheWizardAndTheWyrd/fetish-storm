(ns feeds.spouts
  "Spouts.

More info on the Clojure DSL here:

https://github.com/nathanmarz/storm/wiki/Clojure-DSL"
  (:require [backtype.storm [clojure :refer [defspout spout emit-spout!]]]))

(defspout type-spout ["type"]
  [conf context collector]
  (let [stormys [:regular :bizarro]]
    (spout
     (nextTuple []
       (Thread/sleep 1000)
       (emit-spout! collector [(rand-nth stormys)]))
     (ack [id]
        ;; You only need to define this method for reliable spouts
        ;; (such as one that reads off of a queue like Kestrel)
        ;; This is an unreliable spout, so it does nothing here
        ))))


(defspout event-spout ["event"]
  [conf context collector]

  ;; This is where we would hook/read events from Datomic or our
  ;; distributed queue.
  ;; For now, we are mocking our events and creating in-memory state.

  ;;(let [events [{:action :commented, :user :travis, :listing :red-shoes}
  ;;              {:action :liked, :user :jim, :listing :red-shoes}
  ;;              {:action :liked, :user :karen, :listing :green-hat}
  ;;              {:action :liked, :user :rob, :listing :green-hat}
  ;;              {:action :commented, :user :emma, :listing :green-hat}]]

  (let [events [{:action :commented, :user :travis, :status :latest}
                {:action :commented, :user :jim, :fetish :newest}
                {:action :loved, :user :karen, :note :newest}
                {:action :started, :user :rob, :discussion :group}
                {:action :loved, :user :emma, :pictures :count}
                {:action :commented, :user :emma, :writings :count}]]
    (spout
     (nextTuple []
        ;; This would need to be adjusted in a real app; probably a pull-based
        ;; system that would pull the next events from the distributed queue.

       (Thread/sleep 1000)
       (emit-spout! collector [(rand-nth events)])))))
