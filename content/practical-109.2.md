# પ્રેકટિકલ-૧૦૯.૨ : DDL ,DCL & DML સ્ટેટમેન્ટનો ઉપયોગ : MY SQL

| DML કાર્ય | કમાન્ડ |
|---|---|
| MySQL ના તમામ ડેટાબેઝનું લીસ્ટ જોવા માટે | `SHOW DATABASES;` |
| કોઈ ડેટાબેઝનો ઉપયોગ કરવા માટે | `USE database_name;` |
| કરન્ટ ડેટાબેઝના બધા ટેબલનું લીસ્ટ જોવા માટે | `SHOW TABLES;` |
| નવું ટેબલ બનાવવા માટે | `CREATE TABLE table_name (column1 datatype, column2 datatype, ...);` |
| ટેબલનું સ્ટ્રક્ચર જોવા માટે | `DESC table_name;` |
| ટેબલના બધા ડેટા જોવા માટે | `SELECT * FROM table_name;` |
| ટેબલમાં ડેટા ઉમેરવા માટે | `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);` |
| ટેબલમાંથી જરૂરીયાત હોય તેમ કન્ડિશન મુજબ ડેટા જોવા માટે | `SELECT * FROM table_name WHERE condition;` |
| ટેબલમાંથી જરૂરિયાત હોય તેમ કન્ડિશન મુજબ ડેટા બદલવા માટે | `UPDATE table_name SET column_name = value WHERE condition;` |
| ટેબલમાંથી જરૂરિયાત હોય તેમ કન્ડિશન મુજબ ડેટા દૂર કરવા માટે | `DELETE FROM table_name WHERE condition;` |
