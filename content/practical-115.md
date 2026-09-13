| Topics | Query / Answer |
|---|---|
| Inner Join | 1. Customer અને Order ની માહિતી મેળવવા માટે |
| | `SELECT customer_table.customer_name, order_table.item_name FROM customer_table INNER JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| | 2. Customer Name અને Item Quantity મેળવવા માટે |
| | `SELECT customer_table.customer_name, order_table.item_qty FROM customer_table INNER JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| Left Outer Join | 1. બધા Customer અને તેમના Orders દર્શાવવા માટે |
| | `SELECT customer_table.customer_name, order_table.item_name FROM customer_table LEFT JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| | 2. Order ન હોય તેવા Customer સહિત બધા Customer દર્શાવવા માટે |
| | `SELECT customer_table.customer_name, order_table.order_id FROM customer_table LEFT JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| Right Outer Join | 1. બધા Order અને સંબંધિત Customer ની માહિતી મેળવવા માટે |
| | `SELECT customer_table.customer_name, order_table.item_name FROM customer_table RIGHT JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| | 2. બધા Orders સાથે Customer Name દર્શાવવા માટે |
| | `SELECT order_table.order_id, customer_table.customer_name FROM customer_table RIGHT JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| Group by | 1. દરેક City માં કેટલા Customer છે તે જાણવા માટે |
| | `SELECT city, COUNT(*) AS total_customer FROM customer_table GROUP BY city;` |
| | 2. દરેક Country માં કેટલા Customer છે તે જાણવા માટે |
| | `SELECT country, COUNT(*) AS total_customer FROM customer_table GROUP BY country;` |
| Having | 1. જ્યાં 1 કરતાં વધારે Customer હોય તેવી City મેળવવા માટે |
| | `SELECT city, COUNT(*) AS total_customer FROM customer_table GROUP BY city HAVING COUNT(*) > 1;` |
| | 2. જ્યાં 1 કરતાં વધારે Customer હોય તેવા Country મેળવવા માટે |
| | `SELECT country, COUNT(*) AS total_customer FROM customer_table GROUP BY country HAVING COUNT(*) > 1;` |
| Sub Query | 1. India માં રહેતા Customer ના Orders મેળવવા માટે |
| | `SELECT * FROM order_table WHERE customer_id IN (SELECT customer_id FROM customer_table WHERE country = 'India');` |
| | 2. સૌથી વધુ Quantity ધરાવતા Order ની માહિતી મેળવવા માટે |
| | `SELECT * FROM order_table WHERE item_qty = (SELECT MAX(item_qty) FROM order_table);` |
