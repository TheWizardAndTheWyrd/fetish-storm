%% Based on https://github.com/imperialwicket/colosimo/blob/master/src/model/colosimo_user.erl

-module(feed_eater_erlang_user, [Id, Email, Username, Password::string()]).
-compile(export_all).

-define(SETEC_ASTRONOMY, "This is used to calculate a hash").

session_identifier() ->
  mochihex:to_hex(erlang:md5(?SETEC_ASTRONOMY ++ Id)).

check_password(PasswordAttempt) ->
  Password =:=  bcrypt:hashpw(PasswordAttempt, Password).

login_cookies() ->
  [ mochiweb_cookies:cookie("feed_eater_erlang_user_id", Id, [{path, "/"}]),
    mochiweb_cookies:cookie("session_id", session_identifier(), [{path, "/"}]) ].
