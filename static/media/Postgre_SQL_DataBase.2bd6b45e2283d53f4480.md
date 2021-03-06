# Postgre_SQL_DataBase

---

---

<br/>

---

<br/>

## How to make database

<br/>

### 1.How to log in postgre sql database: psql --username=user_name dbname=db_name

<br/>

### 2.How to connect to a database: \c table_name

<br/>

### 3.How to view all databases: \l

<br/>

### 4.How to view a list of relations: \d

<br/>

### 5.How to view details of a table: \d table_name

<br/>

### 6.In Postgre_SQL_DataBase, a SQL command must end with a semicolon(';').

<br/>

---

<br/>

## How to make table:

<br/>

### 1.CREATE TABLE table_name();

<br/>

### 2.CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);

<br/>

---

<br/>

## CRUD

<br>

### DELETE FROM table_name WHERE condition;

<br>

### INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);

### INSERT INTO second_table(id, username) VALUES(1, 'Samus');

<br>

---

<br>

## How to Add Column:

<br/>

### ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;

<br/>

### ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINTS REFERENCES referenced_table_name(referenced_column_name);

<br/>

---

<br/>

## How to Rename Column:

<br/>

### ALTER TABLE table_name RENAME COLUMN column_name TO new_name;

<br>

### ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT REFERENCES referenced_table_name(referenced_column_name);

<br/>

---

<br/>

## How to Drop Constraint:

<br/>

### ALTER TABLE table_name DROP CONSTRAINT constraint_name;

<br/>

---

<br/>

## Data Types:

<br/>

### VARCHAR(\_): It has a string of characters with a max length specified in the parenthesizes.

<br/>

### NUMERIC(\_, \_): It has a decimal number. In parenthesizes, the first place holder indicates the left digits, and the second does digits on the right of the decimal.

<br/>

### DATE: It’s a string with a format like “yyyy-mm-dd.”

<br/>

### NULL: It can be inserted by simply not including the null columns.

<br/>

---

<br/>

## KEYS

<br/>

### - PRIMARY KEY:

<br/>

### How to add:

<br/>

### ALTER TABLE table_name ADD PRIMARY KEY(column_name);

<br/>

### You can create a primary key from two columns, known as a composite primary key.

<br/>

### ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);

<br/>

### It’s a column that uniquely identifies each row in the table.

<br/>

### It should set a primary key and be only one per table.

<br/>

## FOREIGN KEY:

### ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);

<br/>

### How to use:

<br/>

### ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES;

<br/>

### referenced_table_name(referenced_column_name);

<br/>

### It’s used to relate rows from a table to rows from another table.

<br/>

### - LOGICAL KEY:

<br/>

### What the “outside world” uses for lookup. The key should always be separate, and there should be a primary key. Cause things like logical keys do change.

<br/>

---

<br/>

### CONSTRAINTS ABOUT TABLE

<br/>

### UNIQUE: ALTER TABLE table_name ADD UNIQUE(column_name);

<br/>

### How to use: ALTER TABLE table_name ADD UNIQUE(column_name);

<br/>

### It can be used to make a one-to-one relationship.

<br/>

### NOT NULL: ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;

<br/>

### How to use: ALTER TABLE table_name ALTER COLUMN TYPE SET NOT NULL;

### It makes a column not have blank data.
