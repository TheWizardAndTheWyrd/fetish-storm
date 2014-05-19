-module(feed_eater_erlang_feed_controller, [Req]).
-compile(export_all).

index('GET', []) ->
  {ok, [{content, "<h1 class='h1 dib'>Main Feed</h1>"}]}.
