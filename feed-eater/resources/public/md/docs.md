### fetish-storm

Feeds Backend on Storm and Luminus front-end for streaming Activity Feed

Requirements:

* lein 2.0+
* Redis 2.0+
* rvm
* JRuby 1.7.10

### redis

I just use homebrew to install Redis.  These apps assume a default Redis config on localhost.

---

### feeds

The feeds folder contains the Storm backend.  After starting Redis, cd to the feeds folder and run:

```shell
lein run -m feeds.topology/run!
```

---

### feed-eater

The Clojure and ClojureScript version of FeedEater, built upon the Luminus framework, is coming along.
I am now able to get JSON data from Redis into my web view.  The next steps are to page and format the data
into something attractive.

I have also borrowed the fetlife.com stylesheets.  The goal is to demonstrate expertise in the complete web stack.

---

### feed-eater-rails

Use the following to start the app after bundling:

```shell
rails s puma
```

---

See the following link for loading deps using JRClj:

[chopmo/jruby-clojure-demo](https://github.com/chopmo/jruby-clojure-demo/blob/master/app/controllers/home_controller.rb)

This could probably go in an initializer.  Better yet, just load them using hte JRuby examples:

[jruby/jruby](https://github.com/jruby/jruby/wiki/CallingJavaFromJRuby)

Then, the MessagesContoller can use Carmine from deps to read the Redis values.


