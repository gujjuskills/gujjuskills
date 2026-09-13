# પ્રેકટિકલ-૧૦૬ : ડેટાબેઝ બનાવવો અને તેનો ઉપયો કરવો : MY SQL


| કાર્ય | કમાન્ડ અને વિગત |
|---|---|
| MySQL ના તમામ ડેટાબેઝની યાદી જોવા માટે | `SHOW DATABASES;`  આ કમાન્ડ MySQL Server માં ઉપલબ્ધ તમામ Database ની યાદી બતાવે છે. |
| નવો ડેટાબેઝ બનાવવા માટે | `CREATE DATABASE database_name;`  આ કમાન્ડનો ઉપયોગ નવો Database બનાવવા માટે થાય છે. ઉદાહરણ: `CREATE DATABASE student;` |
| કોઈ ડેટાબેઝ દૂર કરવા માટે | `DROP DATABASE database_name;`  આ કમાન્ડનો ઉપયોગ Database ને કાયમ માટે Delete કરવા માટે થાય છે. ઉદાહરણ: `DROP DATABASE student;` |

## ઉદાહરણ

`CREATE DATABASE student;`

`USE student;`

`SHOW TABLES;`

`SELECT DATABASE();`
