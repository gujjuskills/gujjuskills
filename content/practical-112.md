# પ્રેકટિકલ-૧૧૨ : સરળ સિલેકટ ક્વેરીઓ : MY SQL
| કાર્ય | Solution |
|---|---|
| MySQL ના તમામ ડેટાબેઝનું લીસ્ટ જોવા માટે | `SHOW DATABASES;` |
| કોઈ ડેટાબેઝનો ઉપયોગ કરવા માટે | `USE database_name;` |
| કરંટ ડેટાબેઝના બધા ટેબલનું લીસ્ટ જોવા માટે | `SHOW TABLES;` |
| ટેબલ બનાવવા માટે | `CREATE TABLE table_name (column1 datatype, column2 datatype);` |
| ટેબલનું સ્ટ્રક્ચર જોવા માટે | `DESC table_name;` |
| ટેબલમાં ડેટા ઉમેરવા માટે | `INSERT INTO table_name VALUES (value1, value2);` |
| ટેબલનો ડેટા જોવા માટે | `SELECT * FROM table_name;` |
| ટેબલ બનાવવાની બીજી રીત | `CREATE TABLE table_name (column1 datatype, column2 datatype);` |
| ટેબલનું સ્ટ્રક્ચર જોવા માટે | `DESC table_name;` |
| ટેબલમાં ડેટા ઉમેરવાની બીજી રીત | `INSERT INTO table_name (column1, column2) VALUES (value1, value2);` |
| ટેબલનો ડેટા જોવા માટે | `SELECT * FROM table_name;` |
| Customer Name અને City ને અલગ અલગ રીતે દર્શાવવા માટે | `SELECT customer_name, city FROM customer_table;` |
| ફક્ત Customer ના નામ જોવા માટે | `SELECT customer_name FROM customer_table;` |
| ફક્ત Customer ના નામ જોવા માટે, પુનરાવર્તન ન થાય તેમ | `SELECT DISTINCT customer_name FROM customer_table;` |
| ફક્ત Country India હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE country = 'India';` |
| ફક્ત Customer ID = 4 હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE customer_id = 4;` |
| ફક્ત City Delhi અને Country India હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE city = 'Delhi' AND country = 'India';` |
| ફક્ત City London અથવા Country India હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE city = 'London' OR country = 'India';` |
| Country India ન હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE country != 'India';` |
| Country India અને City Delhi કે Mumbai હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE country = 'India' AND city IN ('Delhi', 'Mumbai');` |
| Country India અને UK હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE country IN ('India', 'UK');` |
| Countryથી ઘટતા ક્રમમાં ગોઠવી રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table ORDER BY country DESC;` |
| Countryથી વધતા ક્રમમાં ગોઠવી રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table ORDER BY country ASC;` |
| ફક્ત પહેલા 2 રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table LIMIT 2;` |
| City ન દર્શાવેલ હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE city IS NULL;` |
| City Delhi, Mumbai, London હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE city IN ('Delhi', 'Mumbai', 'London');` |
| City Delhi, Mumbai, London ન હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE city NOT IN ('Delhi', 'Mumbai', 'London');` |
| Customer ID 2 થી 4 રેકોર્ડ સિવાયના રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE customer_id NOT BETWEEN 2 AND 4;` |
| Customer ID 2 થી 4 રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE customer_id BETWEEN 2 AND 4;` |
| Customer Name m થી શરૂ થતું હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE customer_name LIKE 'm%';` |
| Customer Name m થી પૂરું થતું હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE customer_name LIKE '%m';` |
| Customer Name માં વચ્ચે oo આવતું હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE customer_name LIKE '%oo%';` |
| Customer Name માં બીજા અક્ષર તરીકે a હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE customer_name LIKE '_a%';` |
| Customer Name m થી શરૂ અને r થી પૂરું થતું હોય તેવા રેકોર્ડ જોવા માટે | `SELECT * FROM customer_table WHERE customer_name LIKE 'm%r';` |
| સૌથી ઓછી Item Quantity ધરાવતી સંખ્યા જોવા માટે | `SELECT MIN(item_qty) FROM order_table;` |
| સૌથી વધુ Item Quantity ધરાવતી સંખ્યા જોવા માટે | `SELECT MAX(item_qty) FROM order_table;` |
| Item Name ની કુલ સંખ્યા જાણવા માટે | `SELECT COUNT(item_name) FROM order_table;` |
| Item Quantity નું સરવાળું કરવા માટે | `SELECT SUM(item_qty) FROM order_table;` |
| Item Quantity ની સરેરાશ કરવા માટે | `SELECT AVG(item_qty) FROM order_table;` |
