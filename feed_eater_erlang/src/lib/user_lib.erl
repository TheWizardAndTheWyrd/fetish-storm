-module(user_lib).
-compile(export_all).

hash_password(Password) ->
  bcrypt:hashpw(Password, bcrypt:gen_salt()).

require_login(Req) ->
  case Req:cookie("feed_eater_erlang_user_id") of
    undefined -> {ok, []};
    Id ->
      case boss_db:find(Id) of
        undefined -> {ok, []};
        FeedEaterErlangUser ->
          case FeedEaterErlangUser:session_identifier() =:= Req:cookie("session_id") of
            false -> {ok, []};
            true -> {ok, FeedEaterErlangUser}
          end
      end
  end.
