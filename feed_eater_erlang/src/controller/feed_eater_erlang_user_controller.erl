-module(feed_eater_erlang_user_controller, [Req]).
-compile(export_all).

login('GET', []) ->
  {ok, [{redirect, Req:header(referer)}]};

login('POST', []) ->
  Username = Req:post_param("username"),
  case boss_db:find(feed_eater_erlang_user, [{username, 'equals', Username}]) of
    [User] ->
      case User:check_password(Req:post_param("password")) of
        true ->
          {redirect, proplists:get_value("redirect",
              Req:post_params(), "/"), User:login_cookies()};
        false ->
          {ok, [{error, "Authentication error"}]}
      end;
    [] ->
      {ok, [{error, "Authentication error"}]}
  end.

register('GET', []) ->
  {ok, []};

register('POST', []) ->
  Email = Req:post_param("email"),
  Username = Req:post_param("username"),
  %Password = bcrypt:hashpw(Req:post_param("password"), bcrypt:gen_salt()),
  {ok, Password} = user_lib:hash_password(Req:post_param("password")),
  User = feed_eater_erlang_user:new(id, Email, Username, Password),
  Result = User:save(),
  {ok, [Result]}.
