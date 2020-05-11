SELECT * from Employees
SELECT employeeID, firstName, lastName, birthdate from employees;
SELECT employeeID, (firstName || ' ' || lastName) as Name, birthdate from employees;
SELECT employeeID, (firstName || ' ' || lastName) as Name, birthdate from employees where birthdate > '1965-01-01';

SELECT * from Products where Price > 100; --Products costing more than 100
SELECT * from Products where Price >= 100 and Price < 200; -- Products between 100 and 200 
SELECT * from Products order by Price desc limit 5 -- Top 5 most expensive products
SELECT * from Products order by Price asc limit 5 -- 5 cheapest products
SELECT Country, City, Address, customerName from Customers order by Country, City, customerName --sort by country, then city, then countryname


-- ADD TO DATABASE
INSERT INTO Categories (CategoryName, Description) values ('Lambda Store', 'Lambda Memorabilia') -- adds a category to the existing database

-- LIKE OPERATOR
SELECT * FROM [Categories] where CategoryName like 'Lambda%' --find everything that starts with lambda
SELECT * FROM [Categories] where CategoryName like '%Lam%da%' --find anything with has those letters in it

-- UPDATE A RECORD
--SELECT Categories where CategoryID = 9;
UPDATE Categories SET CategoryName = 'LS Store', Description = 'LS Swag' where CategoryID = 9; 

-- DELETING A RECORD
--SELECT Categories where CategoryID = 11;
DELETE from Categories where CategoryID = 11;