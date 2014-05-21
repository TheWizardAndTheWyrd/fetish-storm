%% Migration: create_users

UpSQL = "
  CREATE TABLE users(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    email text not null,
    name text not null,
    password text not null,
    primary key (id)
  );
".

DownSQL = "DROP TABLE users;".

{create_users,
  fun(up) -> boss_db:execute(UpSQL);
     (down) -> boss_db:execute(DownSQL)
  end}.
