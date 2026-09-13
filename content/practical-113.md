# પ્રેકટિકલ-૧૧૩ : ઇન્સર્ટ અપડેટ અને ડિલીટ ક્વેરીઓ : MY SQL
| ક્રમ | કાર્ય | SQL Command |
|---|---|---|
| 1 | જય દોશીનો મોબાઇલ 8888888888 કરવા માટે | `UPDATE customer_table SET mobile = 8888888888 WHERE customer_name = 'Jay Doshi';` |
| 2 | કસ્ટમર id = 5 હોય ત્યાં city Jamnagar કરવા માટે | `UPDATE customer_table SET city = 'Jamnagar' WHERE customer_id = 5;` |
| 3 | પીયુશ ગણાત્રાનું city Ahmedabad અને country India કરવા માટે | `UPDATE customer_table SET city = 'Ahmedabad', country = 'India' WHERE customer_name = 'Piyush Ganatra';` |
| 4 | કસ્ટમર id = 2 હોય ત્યાં city Bayad, country India અને mobile 7777777777 કરવા માટે | `UPDATE customer_table SET city = 'Bayad', country = 'India', mobile = 7777777777 WHERE customer_id = 2;` |
| 5 | કસ્ટમર id = 5 હોય ત્યાં નામ Ravi Patel કરવા માટે | `UPDATE customer_table SET customer_name = 'Ravi Patel' WHERE customer_id = 5;` |
| 6 | કસ્ટમર id = 2 હોય ત્યાં item name Mouse અને qty = 30 કરવા માટે | `UPDATE order_table SET item_name = 'Mouse', item_qty = 30 WHERE customer_id = 2;` |
| 7 | ઓર્ડર id = 5 હોય ત્યાં item name SMPS કરવા માટે | `UPDATE order_table SET item_name = 'SMPS' WHERE order_id = 5;` |
| 8 | કસ્ટમર id = 2 અને item name Mouse હોય ત્યાં item qty = 50 કરવા માટે | `UPDATE order_table SET item_qty = 50 WHERE customer_id = 2 AND item_name = 'Mouse';` |
| 9 | Country USA હોય તેવા રેકોર્ડ દૂર કરવા માટે | `DELETE FROM customer_table WHERE country = 'USA';` |
| 10 | Country India અને city Ahmedabad હોય તેવા રેકોર્ડ દૂર કરવા માટે | `DELETE FROM customer_table WHERE country = 'India' AND city = 'Ahmedabad';` |
| 11 | Country India અને mobile 7777777777 હોય તેવા રેકોર્ડ દૂર કરવા માટે | `DELETE FROM customer_table WHERE country = 'India' AND mobile = 7777777777;` |
| 12 | Customer id = 1 / 5 હોય તેવા રેકોર્ડ દૂર કરવા માટે | `DELETE FROM customer_table WHERE customer_id IN (1, 5);` |
| 13 | Customer id 2 થી 3 હોય તેવા રેકોર્ડ દૂર કરવા માટે | `DELETE FROM customer_table WHERE customer_id BETWEEN 2 AND 3;` |
| 14 | Order id = 1 હોય તેવો રેકોર્ડ દૂર કરવા માટે | `DELETE FROM order_table WHERE order_id = 1;` |
| 15 | Item name SMPS હોય તેવા રેકોર્ડ દૂર કરવા માટે | `DELETE FROM order_table WHERE item_name = 'SMPS';` |
