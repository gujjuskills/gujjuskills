# લેશન - ૫૬ : સબ ક્વેરીઓ
 ## સબ ક્વેરી શું છે? 
 સબ ક્વેરી એટલે એક SQL ક્વેરીની અંદર લખવામાં આવતી બીજી SQL ક્વેરી. સબ ક્વેરીનો ઉપયોગ મુખ્ય ક્વેરી માટે જરૂરી માહિતી મેળવવા માટે થાય છે. સામાન્ય રીતે સબ ક્વેરીને `WHERE`, `FROM` અથવા `HAVING` ક્લોઝની અંદર લખવામાં આવે છે. 

| વિભાગ | માહિતી |
|---|---|
| **Syntax** | `SELECT column_name FROM table_name WHERE column_name operator (SELECT column_name FROM table_name WHERE condition);` |
| **Example : 1** | `SELECT * FROM Employee WHERE Salary > (SELECT AVG(Salary) FROM Employee); **અર્થ:** જે કર્મચારીઓનો પગાર સરેરાશ પગાર કરતાં વધારે છે તેમની માહિતી મેળવશે. |
| **Example : 2** | `SELECT * FROM Employee WHERE Department_ID IN (SELECT Department_ID FROM Department WHERE Location = 'Ahmedabad');**અર્થ:** અમદાવાદમાં આવેલા વિભાગમાં કામ કરતા કર્મચારીઓની માહિતી મેળવશે. |
## સબ ક્વેરીઝના ફાયદા 
1. જટિલ SQL ક્વેરીને સરળ બનાવવામાં મદદ કરે છે.
2. એક ક્વેરીના પરિણામનો ઉપયોગ બીજી ક્વેરીમાં કરી શકાય છે.
3. ડેટા શોધવા અને ફિલ્ટર કરવા માટે ઉપયોગી છે.
4. `WHERE`, `FROM` અને `HAVING` સાથે ઉપયોગ કરી શકાય છે.
5. ડેટાબેઝમાંથી જરૂરી માહિતી મેળવવામાં સરળતા રહે છે. |
