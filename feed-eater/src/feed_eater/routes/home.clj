(ns feed-eater.routes.home
  (:use compojure.core)
  (:require [feed-eater.views.layout :as layout]
            [feed-eater.util :as util]
            [taoensso.carmine :as car :refer (wcar)]))

(def redis-connection {:pool {:max-active 8}
                       :spec {:host "localhost"
                              :port 6379
                              :timeout 4000}})
(def listener
  (car/with-new-pubsub-listener (:spec redis-connection)
    {"feeds" (fn f1 [msg] (:p "Channel match: " msg))}
   (car/subscribe  "feeds")
   (car/get "feeds")))

;;(defn home-page []
;;  (layout/render
;;    "home.html" {:content (util/md->html "/md/docs.md")}))

(defn home-page []
  (layout/render
   "home.html" {:content listener}))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page)))
