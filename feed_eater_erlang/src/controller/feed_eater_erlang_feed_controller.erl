-module(feed_eater_erlang_feed_controller, [Req]).
-compile(export_all).

before_(_) ->
  user_lib:require_login(Req).

index('GET', [], FeedEaterErlangUser) ->
  {ok, [{feed_eater_erlang_user, FeedEaterErlangUser}]}.

nope('GET', []) ->
  {ok, []}.

oops('GET', []) ->
  {ok, []}.

about('GET', []) ->
  {ok, []}.
