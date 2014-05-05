require 'java'

%w{clojure-1.4.0.jar 
   carmine-2.6.2.jar
   commons-codec-1.9.jar
   nippy-2.6.3.jar
   commons-pool-1.6.jar
   encore-1.4.0.jar
   timbre-3.1.6.jar
   data.json-0.2.4.jar}.each { |j| require Rails.root.join('deps', "#{j}") }
