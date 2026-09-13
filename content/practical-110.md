# પ્રેકટિકલ-૧૧૦ : અવરોધનું અમલીકારણ ,પ્રાયમરી કી અને ફોરેન કી : MY SQL
| કાર્ય | કમાન્ડ |
|---|---|
| MySQL ના તમામ Database જોવા માટે | `SHOW DATABASES;` |
| કોઈ Database નો ઉપયોગ કરવા માટે | `USE database_name;` |
| કરંટ Database ના બધા Table જોવા માટે | `SHOW TABLES;` |
| નવું Table બનાવવા માટે | `CREATE TABLE table_name (column1 datatype, column2 datatype);` |
| Table નું Structure જોવા માટે | `DESC table_name;` |
| NOT NULL નો ઉપયોગ કરવા માટે | `column_name datatype NOT NULL` |
| UNIQUE નો ઉપયોગ કરવા માટે | `column_name datatype UNIQUE` |
| CHECK નો ઉપયોગ કરવા માટે | `column_name datatype CHECK (condition)` |
| DEFAULT નો ઉપયોગ કરવા માટે | `column_name datatype DEFAULT value` |
| Primary Key નો ઉપયોગ કરવા માટે | `column_name datatype PRIMARY KEY` |
| એક જ Column માં એકથી વધુ Constraint આપવા માટે | `column_name datatype NOT NULL UNIQUE CHECK (condition) DEFAULT value` |
| Constraint સાથે Table બનાવવા માટે | `CREATE TABLE table_name (id INT PRIMARY KEY, name VARCHAR(50) NOT NULL, age INT CHECK (age >= 18));` |
| Foreign Key નો ઉપયોગ કરવા માટે | `FOREIGN KEY (column_name) REFERENCES parent_table(parent_column);` |
