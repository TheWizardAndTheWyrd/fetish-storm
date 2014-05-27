-module(feed_eater_erlang_feed_controller, [Req]).
-compile(export_all).

%% Searching in Riak is problematic with boss_db due
%% to a constantly changing Search API (per Evan Miller, creator
%% of Chicago Boss).

before_(_) ->
  user_lib:require_login(Req).

index('GET', [], FeedEaterErlangUser) ->
  FeedEvents = boss_db:find(feed_eater_erlang_event, []),
  Timestamp = boss_mq:now("new-feed-events"),
  {ok, [{feed_eater_erlang_user, FeedEaterErlangUser}, {feedevents, FeedEvents}, {timestamp, Timestamp}]}.

nope('GET', []) ->
  {ok, []}.

oops('GET', []) ->
  {ok, []}.

about('GET', []) ->
  {ok, []}.

pull('GET', [LastTimestamp]) ->
  {ok, Timestamp, FeedEvents} = boss_mq:pull("new-feed-events",
    list_to_integer(LastTimestamp)),
  {json, [{timestamp, Timestamp}, {feedevents, FeedEvents}]}.

feed('GET', []) ->
  Events = boss_db:find(feed_eater_erlang_event, []),
  Events1 = [{feed_eater_erlang_event:id(E), feed_eater_erlang_event:user(E), feed_eater_erlang_event:event(E), feed_eater_erlang_event:feeds(E)} || E <- Events],
  {json, [{events, Events1}]}.

feed1('GET', []) ->
  Events = boss_db:find(feed_eater_erlang_event, []),
  {json, [{events, Events}]}.
