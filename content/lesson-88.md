# લેશન - ૮૮ : જાવાસ્ક્રિપ્ટમાં ફંક્શનનો પરિચય

| મુદ્દો | માહિતી |
|---|---|
| **JavaScript માં ફંક્શન શું છે?** | ફંક્શન એ JavaScript કોડનો પુનઃઉપયોગ કરી શકાય તેવો બ્લોક છે, જે કોઈ ચોક્કસ કાર્ય કરવા માટે બનાવવામાં આવે છે. ફંક્શનને એક વખત બનાવીને જરૂરિયાત મુજબ ઘણી વખત ચલાવી શકાય છે. |
| **JavaScript ફંક્શનના ફાયદા** | 1. કોડનો પુનઃઉપયોગ કરી શકાય છે.2. કોડ સરળ અને વ્યવસ્થિત બને છે.3. પ્રોગ્રામને સમજવામાં સરળતા રહે છે.4. કોડમાં ભૂલો શોધવી અને સુધારવી સરળ બને છે.5. મોટા પ્રોગ્રામને નાના ભાગોમાં વહેંચી શકાય છે. |
| **JavaScript ફંક્શનનું Syntax** | ```javascriptfunction functionName(parameters) {    // Code to be executed}``` |
| **JavaScript ફંક્શનનું ઉદાહરણ** | ```javascriptfunction greet() {    console.log("Hello World");}greet();``` |
| **JavaScript ફંક્શન Arguments** | ફંક્શનને આપેલી વાસ્તવિક કિંમતને Argument કહેવામાં આવે છે. Arguments દ્વારા ફંક્શનમાં ડેટા પાસ કરી શકાય છે.ઉદાહરણ:```javascriptfunction add(a, b) {    console.log(a + b);}add(10, 20);``` |
| **Return Value સાથેનું Function** | `return` સ્ટેટમેન્ટનો ઉપયોગ ફંક્શનમાંથી કોઈ કિંમત પાછી મોકલવા માટે થાય છે.```javascriptfunction add(a, b) {    return a + b;}let result = add(10, 20);console.log(result);``` |
| **JavaScript Function Object** | JavaScript માં Function એ એક Object છે. એટલે કે ફંક્શનમાં Properties અને Methods હોઈ શકે છે. ફંક્શનને Variable માં Store કરી શકાય છે અને બીજા ફંક્શનમાં Argument તરીકે પણ પાસ કરી શકાય છે. |
| **JavaScript Function : Methods** | JavaScript Function Object સાથે ઉપયોગમાં લેવાતી કેટલીક Methods:1. `call()`2. `apply()`3. `bind()` |
