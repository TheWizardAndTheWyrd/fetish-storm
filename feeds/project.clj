(defproject feeds "0.1.0-SNAPSHOT"
  :description "Calculate and publish the Fetish Feed to Redis"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [com.taoensso/carmine "2.6.2"]
                 [com.taoensso/nippy "2.6.3"]
                 [shoutout "0.1.0-SNAPSHOT"] ;; A port of FetLife's Rollout
                 [clj-time "0.7.0"]
                 [com.novemberain/welle "2.0.0"]] ;; a Riak client
  :aot [feeds.TopologySubmitter]
  ;; include storm dependency only in dev because production storm cluster provides it
  :profiles {:dev {:dependencies [[storm "0.8.1"]]}})
