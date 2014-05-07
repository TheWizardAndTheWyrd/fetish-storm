(ns site
  (:require [domina :refer [by-class nodes sel attr]]
            [domina.css :refer [sel]]
            ;;[taoensso.carmine :as car :refer (wcar)]
            ;;[clojure.data.json :as json]
            ))

(defn ^:export init []
  (.log js/console "hello world"))
