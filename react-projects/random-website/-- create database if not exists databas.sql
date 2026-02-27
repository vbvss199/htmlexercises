-- create database if not exists databasename
-- show databases
-- to see which db we r using select database()
use sampleDb;
create table employee(
eid int PRIMARY KEY,
firstnamme VARCHAR(50) NOT NULL,
lastname VARCHAR(50) NOT NULL,
age int NOT NULL,
salary int NOT NULL,
location varchar(50)
);
select * from employee;
-- the constraints in the above table notnull 
EXEC sp_help 'employee';

-- lets insert the values in 
-- make sure ' is for strings and " for column names and identifiers 
INSERT into employee VALUES(1,'bhaskara','vanacharla',25,100000,'hyderabad');
INSERT INTO employee VALUES(2,'amit','sharma',28,120000,'bangalore');
INSERT INTO employee VALUES(3,'priya','singh',26,95000,'delhi');
INSERT INTO employee VALUES(4,'rohit','patel',30,150000,'mumbai');
INSERT INTO employee VALUES(5,'neha','gupta',24,85000,'pune');
INSERT INTO employee VALUES(6,'arjun','verma',29,130000,'hyderabad');
INSERT INTO employee VALUES(7,'sana','khan',27,105000,'bangalore');
INSERT INTO employee VALUES(8,'vikas','mishra',31,160000,'delhi');
INSERT INTO employee VALUES(9,'isha','nair',25,92000,'mumbai');
INSERT INTO employee VALUES(10,'karan','reddy',28,125000,'hyderabad');

SELECT * FROM employee;

-- so if we want to auto increment the employee id we go like empid int auto_increment 
-- if we want to insert only the first 4 values 
-- if we want to increment the pk by 1 everytime The IDENTITY(1,1) means:
INSERT INTO employee(eid,firstnamme,lastname,age,salary) VALUES(11,'sai','swamy',25,160000);
-- for the above statement location is null if we want to have a default value then we go like locaition varchar(40) default
-- to change the table structure we go like alter table tablename add contraint 

-- FILTER OPERATIONS !
-- employees salary greater than 100k
SELECT * FROM employee where salary>100000;
-- the flow of the above query is 1. from employee 2. where condition 3 . select 
-- query where age of employees is >25
SELECT * FROM employee where age>25;

-- CRUD 
-- CREATE 1. CREATE TABLE
-- READ 2. SELECT
-- UPDATE 
-- DELETE - DROP 

-- update are two types like if we want to update the records inside the table we use update and 
--  to update the schema we use ALTER ! 
--  to get the schema desc table tablename idk here in sql server its different somewhat 

-- DML VS DDL 
-- DATA MANIPULATION VS DATA DEFINITION 

-- lets update the salary of the employee whose eid is 2
UPDATE employee SET salary=199900 WHERE eid=2;
SELECT * FROM employee;


-- last one is delete 
DELETE FROM employee WHERE eid=11;

-- DML -> delete as it works on the data of the table 
-- DDL -> alter as it changes the schema of the table 
-- update is DML 
-- drop as entire table is fucking up so it is DDL no definition 
-- delete , update =dml 
-- alter drop =ddl

-- create a table courses with fields courseId ,coursename,courseduration, course description 
CREATE TABLE courses(
    courseId int IDENTITY(1,1) PRIMARY KEY,
    coursename VARCHAR(20) NOT NULL,
    courseduration INT NOT NULL,
    coursedescription VARCHAR(20) NOT NULL
);


INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('SQL Basics',30, 'Intro to SQL queries');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('T-SQL Advanced',45, 'Procedures & functions');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('Entity Framework',40, 'ORM for .NET apps');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('Web APIs',35, 'Building RESTful services');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('React Fundamentals',25, 'JSX, components, state');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('Node.js',30, 'Server-side JavaScript');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('Data Structures',50, 'Arrays, lists, trees');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('Algorithms',50, 'Sorting & searching');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('Docker Essentials',20, 'Containers & images');

INSERT INTO courses (coursename, courseduration, coursedescription)
  VALUES ('Cloud Computing',60, 'Azure basics');

SELECT * from courses;