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

  (let
       ;;[events [{:action :commented, :user :travis, :status :latest}
       ;;         {:action :commented, :user :jim, :fetish :newest}
       ;;         {:action :loved, :user :karen, :note :newest}
       ;;         {:action :started, :user :rob, :discussion :group}
       ;;         {:action :loved, :user :emma, :pictures :count}
       ;;         {:action :commented, :user :emma, :writings :count}]]

       ;;[events [{:action :commented, :user :travis, :status :update,      :glue "on"}
       ;;         {:action :loved,     :user :jim,    :status :picture,     :glue "5 of"}
       ;;         {:action :into,      :user :karen,  :status :fetish,      :glue "everything to do with"}
       ;;         {:action :commented, :user :emma,   :status :writing,     :glue "on"}
       ;;         {:action :loved,     :user :jim,    :status :writing,     :glue "3"}
       ;;         {:action :shared,    :user :karen,  :status :picture,     :glue "69"}
       ;;         {:action :joined,    :user :travis, :status :group-name,  :glue "the group"}
       ;;         {:action :commented, :user :karen,  :status :discussion,  :glue "A Sample Discussion"}
       ;;         {:action :loved,     :user :emma,   :status :discussion,  :glue "A Second Discussion"}]]


       ;; The :glue should be calculated based on some rules.
       ;; Also, it may be beneficial to use a :subject-glue and a :predicate-glue
       ;; for more robust sentences in our Feed.  Analyzing feed data could be
       ;; sent to Storm with Apache OpenNLP to tokenize the words, etc.

       [events [{:user :travis, :action :commented, :glue "on",   :status :update}
                {:user :jim,    :action :loved,     :glue "5 of", :status :picture}
                {:user :karen,  :action :is-into,   :glue "everything to do with", :status :fetish}
                {:user :emma,   :action :commented, :glue "on",   :status :writing}
                {:user :jim,    :action :loved,     :glue "3",    :status :writing}
                {:user :karen,  :action :shared,    :glue "69",   :status :picture}
                {:user :travis, :action :joined,    :glue "the group", :status :group-name}
                {:user :karen,  :action :commented-on, :glue "'A Sample Discussion' in" :status :group-name}
                {:user :emma,   :action :loved,     :glue "'A Second Discussion' in", :status :group-name}]]

    (spout
     (nextTuple []
        ;; This would need to be adjusted in a real app; probably a pull-based
        ;; system that would pull the next events from the distributed queue.

       (Thread/sleep 1000)
       (emit-spout! collector [(rand-nth events)])))))
