# લેશન - ૮૫ : જાવાસ્ક્રિપ્ટ પ્રોગ્રામ કંટ્રોલ સ્ટેટમેન્ટ અને લૂપ

### પ્રોગ્રામ કંટ્રોલ સ્ટેટમેન્ટ્સ :

પ્રોગ્રામ કંટ્રોલ સ્ટેટમેન્ટ્સનો ઉપયોગ પ્રોગ્રામમાં કયા સ્ટેટમેન્ટને ક્યારે અને કેટલી વાર ચલાવવું તે નક્કી કરવા માટે થાય છે. JavaScript માં તેનો ઉપયોગ શરત મુજબ નિર્ણય લેવા અને કોઈ કોડને વારંવાર ચલાવવા માટે થાય છે.

## 1 - If... else

|  |  |
|---|---|
| **Use** | શરત સાચી હોય ત્યારે એક કોડ અને શરત ખોટી હોય ત્યારે બીજો કોડ ચલાવવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `if (condition) { } else { }` |
| **Example** | `let age = 18;``if (age >= 18) {``console.log("પુખ્ત");``} else {``console.log("અપુખ્ત");``}` |

## 2 - switch case

|  |  |
|---|---|
| **Use** | એક expression ની અલગ અલગ values મુજબ અલગ અલગ કોડ ચલાવવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `switch (expression) { case value: statement; break; default: statement; }` |
| **Example** | `let day = 1;``switch (day) {``case 1:``console.log("સોમવાર");``break;``default:``console.log("અમાન્ય દિવસ");``}` |

## 3 - do while loop

|  |  |
|---|---|
| **Use** | કોડને ઓછામાં ઓછો એક વખત ચલાવીને ત્યારબાદ શરત ચકાસવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `do { statement; } while (condition);` |
| **Example** | `let i = 1;``do {``console.log(i);``i++;``} while (i <= 5);` |

## 4 - while loop

|  |  |
|---|---|
| **Use** | જ્યાં સુધી આપેલી શરત સાચી હોય ત્યાં સુધી કોડને વારંવાર ચલાવવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `while (condition) { statement; }` |
| **Example** | `let i = 1;``while (i <= 5) {``console.log(i);``i++;``}` |

## 5 - for loop

|  |  |
|---|---|
| **Use** | કોડના બ્લોકને ચોક્કસ સંખ્યામાં વારંવાર ચલાવવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `for (initialization; condition; increment/decrement) { statement; }` |
| **Example** | `for (let i = 1; i <= 5; i++) {``console.log(i);``}` |

