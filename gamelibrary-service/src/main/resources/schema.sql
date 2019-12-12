SET sql_mode = '';

create table if not exists game (
  id int(11) not null auto_increment,
  name varchar(255) not null,
  platform varchar(255) not null,
  genre varchar(100) not null,
  releaseDate date not null,
  nrPlayers tinyint(1) not null,
  publisher varchar(255) not null,
  imageUrl varchar(255) not null,
  primary key (id),
  unique key name (name)
) engine=innodb ;







