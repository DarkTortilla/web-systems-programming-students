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

create table user_phone(
	id serial primary key,
	phone varchar(15) not null,
	userId int not null,
	constraint user_phone_fk
	foreing key (userId)
	references user(id) 
	--delete on cascade
);

create table carts(
	id serial primary key,
	userId int not null,
	constraint user_cart_fk
	foreing key (userId)
	references user(id)
	delete on cascade
);

create table cart_item(
	cart_id int references carts(id),
	product_id int references products(id),
	quantity int not null,
	primary key(cart_id, product_id)
);


select * from users;
select * from user_phone;

select * from users where id = 15;

select u.*, up.*
from users u join user_phone
up on u.id=up.userId 
where u.id =15; 

/* cart */

select c.id, p.name, p.price
from 
products p join cart_item ci
on p.id = ci.productId 
join carts c on c.id = ci.id
where c.id=5;
