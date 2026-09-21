create database pos;

use pos;

create table users(
id serial primary key, 
name varchar(50) not null, 
last_name varchar(50) not null,
age int not null,
email varchar(100) unique,
role varchar(50) not null,
password varchar(100) not null
);

create table products(
id serial primary key,
name varchar(50) not null,
price float not null,
stock int not null,
description varchar(500) not null,
brand varchar(100),
img text
);


