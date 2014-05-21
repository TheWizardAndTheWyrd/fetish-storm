-module(user_lib).
-compile(export_all).

%% crypto:start().
%% bcrypt:start().

hash_password(Password) ->
  %bcrypt:hashpw(Password, bcrypt:gen_salt()).
  {ok, Salt} = bcrypt:gen_salt(),
  bcrypt:hashpw(Password, Salt).

require_login(Req) ->
  case Req:cookie("feed_eater_erlang_user_id") of
    %undefined -> {ok, []};
    undefined -> {redirect, "/user/login"};
    Id ->
      case boss_db:find(Id) of
        %undefined -> {ok, []};
        undefined -> {redirect, "/user/login"};
        User ->
          case User:session_identifier() =:= Req:cookie("session_id") of
            %false -> {ok, []};
            false -> {redirect, "/user/login"};
            true -> {ok, User}
          end
      end
  end.

compare_password(PasswordAttempt, Password) ->
  {ok, Password} =:= bcrypt:hashpw(PasswordAttempt, Password).
