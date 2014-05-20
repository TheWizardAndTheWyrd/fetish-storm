-module(feed_eater_erlang_feed_controller, [Req]).
-compile(export_all).

{ok, C} = eredis:start_link().
{ok, FeedData} = eredis:q(C, ["MGET" | ["rob", "karen", "travis", "emma", "kaitlyn", "jim"]]).

index('GET', []) ->
  {ok, [{content, "<h1 class='h1 dib'>Main Feed</h1>"}]}.
%%  {ok, [{ok, FeedData}]}.
