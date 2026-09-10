# પ્રેકટિકલ-૮૯ : ટેક્સને ફોરમેટ અને ફેરફાર કરો : MS-EXCEL

| Topic | સામાન્ય સમજ / કાર્ય |
|---|---|
| Format text using RIGHT(), LEFT() and MID() functions | **RIGHT() Function:** Textની જમણી બાજુથી આપેલ અક્ષરો મેળવવા માટે ઉપયોગ થાય છે. Syntax: `=RIGHT(text, num_chars)` ઉદાહરણ: `=RIGHT("COMPUTER",3)` → `TER` પરિણામ આપે છે.  |
| |**LEFT() Function:** Textની ડાબી બાજુથી આપેલ અક્ષરો મેળવવા માટે ઉપયોગ થાય છે. Syntax: `=LEFT(text, num_chars)` ઉદાહરણ: `=LEFT("COMPUTER",3)` → `COM` પરિણામ આપે છે.  |
| |**MID() Function:** Textની વચ્ચેના ભાગમાંથી આપેલ સ્થાનથી અક્ષરો મેળવવા માટે ઉપયોગ થાય છે. Syntax: `=MID(text, start_num, num_chars)` ઉદાહરણ: `=MID("COMPUTER",4,3)` → `PUT` પરિણામ આપે છે. આ Functionsનો ઉપયોગ નામ, કોડ, ID, મોબાઇલ નંબર અથવા અન્ય Textમાંથી જરૂરી ભાગ અલગ કરવા માટે થાય છે.|
| Format text using UPPER(), LOWER() and LEN() functions | **UPPER() Function:** Textના બધા અક્ષરોને Capital Lettersમાં ફેરવવા માટે ઉપયોગ થાય છે. Syntax: `=UPPER(text)` ઉદાહરણ: `=UPPER("computer")` → `COMPUTER`.  |
| |**LOWER() Function:** Textના બધા અક્ષરોને Small Lettersમાં ફેરવવા માટે ઉપયોગ થાય છે. Syntax: `=LOWER(text)` ઉદાહરણ: `=LOWER("COMPUTER")` → `computer`. |
| | **LEN() Function:** Textમાં રહેલા કુલ અક્ષરોની સંખ્યા જાણવા માટે ઉપયોગ થાય છે. તેમાં Space પણ એક Character તરીકે ગણાય છે. Syntax: `=LEN(text)` ઉદાહરણ: `=LEN("COMPUTER")` → `8`. આ Functionsનો ઉપયોગ Textનું Case બદલવા અને Textની લંબાઈ ગણવા માટે થાય છે.|
| Format text using CONCAT() and TEXTJOIN() functions | **CONCAT() Function:** બે અથવા વધુ Text અથવા Cell Valuesને એક જ Textમાં જોડવા માટે ઉપયોગ થાય છે. Syntax: `=CONCAT(text1,text2,...)` ઉદાહરણ: A1માં `જય` અને B1માં `કુમાર` હોય તો `=CONCAT(A1,B1)` → `જયકુમાર` પરિણામ મળે છે. વચ્ચે Space જોઈએ તો `=CONCAT(A1," ",B1)` → `જય કુમાર`. |
| | **TEXTJOIN() Function:** એકથી વધુ Text Valuesને આપેલ Delimiter જેમ કે Space, Comma વગેરે સાથે જોડવા માટે ઉપયોગ થાય છે. Syntax: `=TEXTJOIN(delimiter, ignore_empty, text1,...)` ઉદાહરણ: `=TEXTJOIN(" ",TRUE,A1,B1,C1)` → ત્રણેય Cell Values વચ્ચે Space સાથે જોડાય છે. `TRUE` રાખવાથી ખાલી Cellને Ignore કરવામાં આવે છે. આ Functionsનો ઉપયોગ First Name, Middle Name, Last Name, Address અથવા અલગ અલગ Cellમાં રહેલી માહિતી જોડવા માટે થાય છે. |
