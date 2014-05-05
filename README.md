fetish-storm
============

Feeds Backend on Storm and Luminus front-end for streaming Activity Feed

Requirements:

lein
Redis

The feeds folder contains the Storm backend.  After starting Redis, cd to the feeds folder and run:

lein run -m feeds.topology/run!
