# Introduction to Relational Databases, SQL and Knex

In this project we will cover the basics of `Structure Query Language (SQL)`, `Relational Databases`, and `Knex.js Queries`.

## Prerequisites

- [SQLite Studio Installed](https://sqlites
tudio.pl/index.rvt?act=download).
- [This Web SQL Tool Loaded in a chrome or chromium browser tab](https://www.w3schools.com/Sql/trysql.asp?filename=trysql_select_all). It does not work well on Firefox.

## Project Setup

- [x] fork and clone this repository.
- [x] **CD into the folder** where you cloned **your fork**.
- [x] type `npm i` to download dependencies.

## NOTES

- SQL is a language that is used to communicate with Database Servers

- DDL - Data Defintion Language used to modify database objects ex. CREATE TABLE, ALTER TABLE
- DML - Data Manipulation Language used to manipulate the stored data. ex. INSERT, UPDATE, DELETE
- DQL - Data Query Language used to asked questions about the data stored ex. SELECT
- DCL - Data Control language is used to manage database security and user access ex. REVOKE, GRANT
- TCC - Transaction Control Commands used for managing groups of statements that must execute as a unit or not execute at all ex. COMMIT, ROLLBACK

Differences between relational databases and sql are that sql is a language for interacting with relational databases

SQL commands are written in UPPERCASE and end with a ;

## SQL Commands
| Command              | URL               | Method | Response         |
| :------------------- | :---------------- | :----- | :--------------- |
| SELECT               |  what you want to see|||


SELECT employeeID, firstName, lastName, birthdate from employees;
SELECT employeeID, (firstName || " " || lastName) as Name, birthdate from employees;
