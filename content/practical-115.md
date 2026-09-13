# પ્રેકટિકલ-૧૧૫ : જોઇન્સ , ગ્રુપ બાય હેવીંગ અને સબ ક્વેરી : MY SQL
| Topics | Query / Answer |
|---|---|
| **Inner Join** | **1. Customer અને Order ની માહિતી મેળવવા માટે:** |
| | `SELECT customer_table.customer_name, order_table.item_name FROM customer_table INNER JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| **Left Outer Join** | **1. બધા Customer અને તેમના Orders દર્શાવવા માટે:** |
| | `SELECT customer_table.customer_name, order_table.item_name FROM customer_table LEFT JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| **Right Outer Join** | **1. બધા Order અને સંબંધિત Customer ની માહિતી મેળવવા માટે:** |
| | `SELECT customer_table.customer_name, order_table.item_name FROM customer_table RIGHT JOIN order_table ON customer_table.customer_id = order_table.customer_id;` |
| **Group by** | **1. દરેક City માં કેટલા Customer છે તે જાણવા માટે:** |
| | `SELECT city, COUNT(*) AS total_customer FROM customer_table GROUP BY city;` |
| **Having** | **1. જ્યાં 1 કરતાં વધારે Customer હોય તેવી City મેળવવા માટે:** |
| | `SELECT city, COUNT(*) AS total_customer FROM customer_table GROUP BY city HAVING COUNT(*) > 1;` |
| **Sub Query** | **1. India માં રહેતા Customer ના Orders મેળવવા માટે:** |
| | `SELECT * FROM order_table WHERE customer_id IN (SELECT customer_id FROM customer_table WHERE country = 'India');` |
