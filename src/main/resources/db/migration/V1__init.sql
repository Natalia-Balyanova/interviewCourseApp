create table students
(
    id         bigserial primary key,
    name       varchar(255),
    age        int,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);
insert into students (name, age)
values  ('Max', 18),
        ('Bob', 18),
        ('John', 19),
        ('Tom', 18),
        ('Mark', 19);