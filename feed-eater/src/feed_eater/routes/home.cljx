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

(defn events-page []
  (layout/render "home.html" {:content
                                (str "<h1>Feeds:</h1><p>"
                                       (json/write-str (wcar redis-connection (car/hgetall "rob")))
                                     "</p>")

                              ;; TO DO:
                              ;; Remove the duplicate Redis call; no need for that.  Also, figure about-page
                              ;; how to get this data to the view properly treated to be used as JSON.

                              :feed-data (json/write-str (wcar redis-connection (car/hgetall "rob")))
                              ;;:feed-data (wcar redis-connection (car/hgetall "rob"))
                              }))

;;(defn feed-api [key]
;;  (layout/render "home.html"
;;    {:content (.log js/console (json/write-str (wcar redis-connection (car/hgetall key) "</p>")))}))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))
  (GET "/feed" [] (events-page))
 )
