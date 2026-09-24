create database pos;

--use database pos; --mariadb

\connect pos; 
-- bigint autoincrement
create table users(
	id serial primary key,
	name varchar(50) not null,
	last_name varchar(50) not null,
	email varchar(50) not null,
	password varchar(50) not null,
	role varchar(50) not null,
	rfc varchar(13) not null
);

create table products(
	id serial primary key,
	name varchar(50) not null,
	description varchar(50) not null,
	price float not null,
	stock int not null,
	imgUrl varchar(100) not null,
);

create table users_phone(
	id serial primary key,
	phone varchar(14) not null,
	userId int references users(id) not null
);
