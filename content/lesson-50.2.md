# લેશન - ૫૦.૨ : DDl,DML,DCL સ્ટેટમેન્ટ અને વિવિધ ડેટા ટાઈપ્સ

### What is SQL Commands?

SQL Commands એ Database માં Data બનાવવા, બદલવા, કાઢવા, મેળવવા અને નિયંત્રિત કરવા માટે ઉપયોગમાં લેવાતા Commands છે.

---

## Types of SQL Commands

### 1 – DDL (Data Definition Language): (i) CREATE

| | |
|---|---|
| **Use :** | નવી Table અથવા Database Object બનાવવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `CREATE TABLE table_name (column1 datatype, column2 datatype);` |
| **Example :** | `CREATE TABLE Student (ID INT, Name VARCHAR(50));` |

### 1 – DDL (Data Definition Language): (ii) DROP

| | |
|---|---|
| **Use :** | Table અથવા Database Object ને કાયમી રીતે દૂર કરવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `DROP TABLE table_name;` |
| **Example :** | `DROP TABLE Student;` |

### 1 – DDL (Data Definition Language): (iii) ALTER

| | |
|---|---|
| **Use :** | હાલની Table ની રચનામાં ફેરફાર કરવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `ALTER TABLE table_name ADD column_name datatype;` |
| **Example :** | `ALTER TABLE Student ADD Age INT;` |

### 1 – DDL (Data Definition Language): (iv) TRUNCATE

| | |
|---|---|
| **Use :** | Table માં રહેલો તમામ Data દૂર કરવા માટે ઉપયોગ થાય છે, પરંતુ Table ની રચના જળવાઈ રહે છે. |
| **Syntax :** | `TRUNCATE TABLE table_name;` |
| **Example :** | `TRUNCATE TABLE Student;` |

### 2 – DML (Data Manipulation Language): (i) INSERT

| | |
|---|---|
| **Use :** | Table માં નવો Data દાખલ કરવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `INSERT INTO table_name (column1, column2) VALUES (value1, value2);` |
| **Example :** | `INSERT INTO Student (ID, Name) VALUES (1, 'Rahul');` |

### 2 – DML (Data Manipulation Language): (ii) UPDATE

| | |
|---|---|
| **Use :** | Table માં રહેલા Data ને બદલવા અથવા સુધારવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `UPDATE table_name SET column_name = value WHERE condition;` |
| **Example :** | `UPDATE Student SET Name = 'Amit' WHERE ID = 1;` |

### 2 – DML (Data Manipulation Language): (iii) DELETE

| | |
|---|---|
| **Use :** | Table માંથી Data અથવા Record દૂર કરવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `DELETE FROM table_name WHERE condition;` |
| **Example :** | `DELETE FROM Student WHERE ID = 1;` |

### 3 – DCL (Data Control Language): (i) GRANT

| | |
|---|---|
| **Use :** | User ને Database Object પર અધિકાર અથવા Privileges આપવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `GRANT privilege ON object TO user;` |
| **Example :** | `GRANT SELECT ON Student TO user1;` |

### 3 – DCL (Data Control Language): (ii) REVOKE

| | |
|---|---|
| **Use :** | User પાસેથી આપવામાં આવેલ Database અધિકાર અથવા Privileges પાછા લેવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `REVOKE privilege ON object FROM user;` |
| **Example :** | `REVOKE SELECT ON Student FROM user1;` |

### 4 – TCL (Transaction Control Language): (i) COMMIT

| | |
|---|---|
| **Use :** | Transaction દરમિયાન થયેલા ફેરફારોને કાયમી રીતે Database માં સાચવવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `COMMIT;` |
| **Example :** | `INSERT INTO Student VALUES (2, 'Ravi'); COMMIT;` |

### 4 – TCL (Transaction Control Language): (ii) ROLLBACK

| | |
|---|---|
| **Use :** | Transaction દરમિયાન થયેલા ફેરફારોને રદ કરીને પાછલી સ્થિતિમાં જવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `ROLLBACK;` |
| **Example :** | `UPDATE Student SET Name = 'Raj' WHERE ID = 2; ROLLBACK;` |

### 4 – TCL (Transaction Control Language): (iii) SAVEPOINT

| | |
|---|---|
| **Use :** | Transaction દરમિયાન ચોક્કસ Point બનાવવા માટે ઉપયોગ થાય છે, જેથી જરૂર પડે ત્યારે તે Point સુધી Rollback કરી શકાય. |
| **Syntax :** | `SAVEPOINT savepoint_name;` |
| **Example :** | `SAVEPOINT sp1;` |

### 5 – DQL (Data Query Language): (i) SELECT

| | |
|---|---|
| **Use :** | Database માંથી Data મેળવવા અથવા જોવા માટે ઉપયોગ થાય છે. |
| **Syntax :** | `SELECT column1, column2 FROM table_name WHERE condition;` |
| **Example :** | `SELECT ID, Name FROM Student;` |
