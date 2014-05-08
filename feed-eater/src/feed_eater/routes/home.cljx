(ns feed-eater.routes.home
  (:use compojure.core)
  (:require [feed-eater.views.layout :as layout]
            [feed-eater.util :as util]
            [taoensso.carmine :as car :refer (wcar)]
            [clojure.data.json :as json]
            ))

(def redis-connection {:pool {:max-active 8}
                       :spec {:host "localhost"
                              :port 6379
                              :timeout 4000}})
(def listener
  (car/with-new-pubsub-listener (:spec redis-connection)
    {"feeds" (fn f1 [msg] (:p "Channel match: " msg))}
   ;;(json/write-str msg)
   (car/subscribe  "feeds")
   ;;(car/get "feeds")
   ))

(defn home-page []
  (layout/render
    "home.html" {:content (util/md->html "/md/docs.md")}))

;;(defn home-page []
;;  (layout/render
;;   "home.html" {:content listener}))

(defn feed-page []
  (layout/render "feed.html" {:content
                                (str "<h3>Feeds:</h3><hr>")

                              ;; TO DO:
                              ;; Remove the duplicate Redis calls; no need for that.
                              ;; Also, we should consider Redis clusters with channels
                              ;; for each logged-in users' friends' activities.

                              :feed-data (wcar redis-connection ;;(car/hgetall "rob")
                                                                ;;(car/hgetall "karen")
                                                                ;;(car/hgetall "travis")
                                                                (car/hgetall "emma")
                                                                (car/hgetall "kaitlyn")
                                                                ;;(car/hgetall "jim")
                                                                )

                              ;;:feed-data (wcar redis-connection (car/hgetall "travis"))

                              }))


(defn feed-api [user-key]
  (layout/render "home.html"
    {:feed-data (json/write-str (wcar redis-connection (car/hgetall key)))}))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/"         []         (home-page))
  (GET "/about"    []         (about-page))
  (GET "/feed"     []         (feed-page))
  (GET "/feed-api" [user-key] (feed-api user-key)))
