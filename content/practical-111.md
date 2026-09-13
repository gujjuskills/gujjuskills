# પ્રેકટિકલ-૧૧૧ : ટેબલમાં અનુક્રમિકા ગોઠવવી : MY SQL
# Adding Indices to Tables
### ટેબલમાં અનુસૂચિકા ઉમેરવી

| કાર્ય | કમાન્ડ |
|---|---|
| MySQL ના તમામ ડેટાબેઝનું લિસ્ટ જોવા માટે | `SHOW DATABASES;` |
| કોઈ ડેટાબેઝનો ઉપયોગ કરવા માટે | `USE database_name;` |
| કરંટ ડેટાબેઝના બધા ટેબલનું લિસ્ટ જોવા માટે | `SHOW TABLES;` |
| ટેબલનું સ્ટ્રક્ચર જોવા માટે | `DESCRIBE table_name;` |
| ટેબલનો ડેટા જોવા માટે | `SELECT * FROM table_name;` |
| ટેબલમાં રહેલ ઇન્ડેક્સ જોવા માટે | `SHOW INDEX FROM table_name;` |
| ટેબલમાં ઇન્ડેક્સ બનાવવા માટે | `CREATE INDEX index_name ON table_name (column_name);` |
| ટેબલમાં ઇન્ડેક્સ દૂર કરવા માટે | `DROP INDEX index_name ON table_name;` |
