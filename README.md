fetish-storm
============

Feeds Backend on Storm and Luminus front-end for streaming Activity Feed

Requirements:

lein
Redis 2.0+
rvm
JRuby 1.7.10

redis
=====

I just use homebrew to install Redis.  These apps assume a default Redis config on localhost.

feeds
=====

The feeds folder contains the Storm backend.  After starting Redis, cd to the feeds folder and run:

lein run -m feeds.topology/run!

feed-eater-rails
================

Use the following to start the app after bundling:

rails s puma

See the following link for loading deps using JRClj:

https://github.com/chopmo/jruby-clojure-demo/blob/master/app/controllers/home_controller.rb

This could probably go in an initializer.

Then, the MessagesContoller can use Carmine from deps to read the Redis values.

feed-eater
==========

I am not having too much luck getting the data from Redis to render to the page.
In the REPL, I can query Redis without a problem.
