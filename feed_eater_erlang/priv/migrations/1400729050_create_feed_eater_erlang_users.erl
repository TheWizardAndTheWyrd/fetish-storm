%% Migration: create_feed_eater_erlang_users

UpSQL = "
  CREATE TABLE feed_eater_erlang_users(
    id SERIAL PRIMARY KEY,
    email text not null,
    username text not null,
    password text not null
  );
".

DownSQL = "DROP TABLE users;".

{create_users,
  fun(up) -> boss_db:execute(UpSQL);
     (down) -> boss_db:execute(DownSQL)
  end}.
