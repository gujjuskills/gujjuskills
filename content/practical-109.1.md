# પ્રેકટિકલ-૧૦૯.૧ : DDL ,DCL & DML સ્ટેટમેન્ટનો ઉપયોગ : MY SQL

| DDL / DML કાર્ય | કમાન્ડ |
|---|---|
| MySQL ના તમામ ડેટાબેઝનું લિસ્ટ જોવા માટે | `SHOW DATABASES;` |
| કોઈ ડેટાબેઝનો ઉપયોગ કરવા માટે | `USE database_name;` |
| કરંટ ડેટાબેઝના બધા ટેબલનું લિસ્ટ જોવા માટે | `SHOW TABLES;` |
| નવું ટેબલ બનાવવા માટે | `CREATE TABLE table_name (column1 datatype, column2 datatype);` |
| ટેબલનું સ્ટ્રક્ચર જોવા માટે | `DESC table_name;` |
| ટેબલમાં કોઈ ફિલ્ડ ઉમેરવા માટે | `ALTER TABLE table_name ADD column_name datatype;` |
| ટેબલમાં કોઈ ફિલ્ડનો ડેટા ટાઇપ બદલવા માટે | `ALTER TABLE table_name MODIFY column_name new_datatype;` |
| ટેબલમાંથી કોઈ ફિલ્ડ દૂર કરવા માટે | `ALTER TABLE table_name DROP COLUMN column_name;` |
| ટેબલનું નામ બદલવા માટે | `RENAME TABLE old_table_name TO new_table_name;` |
| ટેબલમાં રહેલ ડેટા જોવા માટે | `SELECT * FROM table_name;` |
| ટેબલમાં ડેટા ઉમેરવા માટે | `INSERT INTO table_name (column1, column2) VALUES (value1, value2);` |
| ટેબલમાંથી બધા ડેટાને એક સાથે દૂર કરવા માટે | `DELETE FROM table_name;` |
| ડેટાબેઝમાંથી ટેબલને દૂર કરવા માટે | `DROP TABLE table_name;` |
