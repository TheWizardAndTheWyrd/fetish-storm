-module(feed_eater_erlang_feed_controller, [Req]).
-compile(export_all).

%% Searching in Riak is problematic with boss_db due
%% to a constantly changing Search API (per Evan Miller, creator
%% of Chicago Boss).

%before_(_) ->
%  user_lib:require_login(Req).

index('GET', [], FeedEaterErlangUser) ->
  {ok, [{feed_eater_erlang_user, FeedEaterErlangUser}]}.

nope('GET', []) ->
  {ok, []}.

oops('GET', []) ->
  {ok, []}.

about('GET', []) ->
  {ok, []}.
