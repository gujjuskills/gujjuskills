# લેશન - ૮૪ : જાવાસ્ક્રિપ્ટ એરિથમેટિક , કંપરીઝન અને લોજીકલ ફંક્શન

## ❖ JS – Arithmetic Operators :

| Operator | Description | Example |
|---|---|---|
| `+` | સરવાળો કરવા માટે Addition Operator નો ઉપયોગ થાય છે. તે બે સંખ્યાઓને જોડીને તેમનો સરવાળો આપે છે. | `10 + 5 = 15` |
| `-` | બાદબાકી કરવા માટે Subtraction Operator નો ઉપયોગ થાય છે. તે પ્રથમ સંખ્યામાંથી બીજી સંખ્યા બાદ કરે છે. | `10 - 5 = 5` |
| `*` | ગુણાકાર કરવા માટે Multiplication Operator નો ઉપયોગ થાય છે. | `10 * 5 = 50` |
| `/` | ભાગાકાર કરવા માટે Division Operator નો ઉપયોગ થાય છે. | `10 / 5 = 2` |
| `%` | ભાગાકાર કર્યા પછી મળતી શેષ રકમ (Remainder) મેળવવા માટે Modulus Operator નો ઉપયોગ થાય છે. | `10 % 3 = 1` |
| `**` | સંખ્યાનો ઘાત (Power) મેળવવા માટે Exponentiation Operator નો ઉપયોગ થાય છે. | `2 ** 3 = 8` |
| `++` | કોઈ સંખ્યાની કિંમતમાં 1 નો વધારો કરવા માટે Increment Operator નો ઉપયોગ થાય છે. | `a=5; a++ → 6` |
| `--` | કોઈ સંખ્યાની કિંમતમાંથી 1 ઘટાડવા માટે Decrement Operator નો ઉપયોગ થાય છે. | `a=5; a-- → 4` |

## ❖ JS – Comparison Operators :

| Operator | Description | Example |
|---|---|---|
| `==` | બે values સરખી છે કે નહીં તે તપાસે છે. Data Type ને ધ્યાનમાં લેતું નથી. | `5 == "5" → true` |
| `===` | બે values અને તેમના Data Type બંને સરખા છે કે નહીં તે તપાસે છે. | `5 === "5" → false` |
| `!=` | બે values સરખી ન હોય તો `true` આપે છે. | `5 != 10 → true` |
| `!==` | Value અથવા Data Type સરખા ન હોય તો `true` આપે છે. | `5 !== "5" → true` |
| `>` | ડાબી બાજુની value જમણી બાજુની value કરતાં મોટી છે કે નહીં તે તપાસે છે. | `10 > 5 → true` |
| `<` | ડાબી બાજુની value જમણી બાજુની value કરતાં નાની છે કે નહીં તે તપાસે છે. | `5 < 10 → true` |
| `>=` | ડાબી બાજુની value જમણી બાજુની value કરતાં મોટી અથવા સરખી છે કે નહીં તે તપાસે છે. | `10 >= 10 → true` |
| `<=` | ડાબી બાજુની value જમણી બાજુની value કરતાં નાની અથવા સરખી છે કે નહીં તે તપાસે છે. | `5 <= 10 → true` |

## ❖ JS – Comparison Operators :

| Operator | Description | Example |
|---|---|---|
| `&&` | Logical AND Operator છે. બંને Conditions `true` હોય ત્યારે જ પરિણામ `true` આપે છે. | `true && true → true` |
| `\|\|` | Logical OR Operator છે. બેમાંથી કોઈ એક Condition `true` હોય તો પરિણામ `true` આપે છે. | `true \|\| false → true` |
| `!` | Logical NOT Operator છે. તે Condition ના પરિણામને ઉલટાવી દે છે. `true` ને `false` અને `false` ને `true` કરે છે. | `!true → false` |

## ❖ JS – Operator Precedence (Any Ten)

| Operator | Description |
|---|---|
| `()` | Grouping – કૌંસમાં રહેલી Expression સૌથી પહેલા execute થાય છે. |
| `**` | Exponentiation – ઘાતની ગણતરી કરે છે. |
| `++`, `--` | Increment / Decrement – Value માં 1 નો વધારો અથવા ઘટાડો કરે છે. |
| `*`, `/`, `%` | Multiplication, Division અને Modulus operations કરે છે. |
| `+`, `-` | Addition અને Subtraction operations કરે છે. |
| `<`, `<=`, `>`, `>=` | Values વચ્ચે નાની, મોટી અથવા સરખી હોવાની સરખામણી કરે છે. |
| `==`, `!=`, `===`, `!==` | Equality અને Inequality તપાસે છે. |
| `&&` | Logical AND operation કરે છે. |
| `\|\|` | Logical OR operation કરે છે. |
| `=`, `+=`, `-=`, `*=`, `/=` | Assignment Operators દ્વારા variable ને value assign કરવામાં આવે છે. |
