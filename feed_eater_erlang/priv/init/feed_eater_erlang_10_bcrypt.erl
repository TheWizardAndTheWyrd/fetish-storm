-module(feed_eater_erlang_10_bcrypt).
-export([init/0, stop/0]).

init() ->
  crypto:start(),
  bcrypt:start().

stop() ->
  bcrypt:stop(),
  crypto:stop().
