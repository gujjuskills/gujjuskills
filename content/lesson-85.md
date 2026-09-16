# લેશન - ૮૫ : જાવાસ્ક્રિપ્ટ પ્રોગ્રામ કંટ્રોલ સ્ટેટમેન્ટ અને લૂપ

# JS – Program Control Statements & Loop

### પ્રોગ્રામ કંટ્રોલ સ્ટેટમેન્ટ્સ :

## 1 - If... else

|  |  |
|---|---|
| **Use** | શરત સાચી હોય ત્યારે એક કોડ અને શરત ખોટી હોય ત્યારે બીજો કોડ ચલાવવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `if (condition) { } else { }` |
| **Example** | `let age = 18;`<br>`if (age >= 18) {`<br>`console.log("પુખ્ત");`<br>`} else {`<br>`console.log("અપુખ્ત");`<br>`}` |

## 2 - switch case

|  |  |
|---|---|
| **Use** | એક expression ની અલગ અલગ values મુજબ અલગ અલગ કોડ ચલાવવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `switch (expression) { case value: statement; break; default: statement; }` |
| **Example** | `let day = 1;`<br>`switch (day) {`<br>`case 1:`<br>`console.log("સોમવાર");`<br>`break;`<br>`default:`<br>`console.log("અમાન્ય દિવસ");`<br>`}` |

## 3 - do while loop

|  |  |
|---|---|
| **Use** | કોડને ઓછામાં ઓછો એક વખત ચલાવીને ત્યારબાદ શરત ચકાસવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `do { statement; } while (condition);` |
| **Example** | `let i = 1;`<br>`do {`<br>`console.log(i);`<br>`i++;`<br>`} while (i <= 5);` |

## 4 - while loop

|  |  |
|---|---|
| **Use** | જ્યાં સુધી આપેલી શરત સાચી હોય ત્યાં સુધી કોડને વારંવાર ચલાવવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `while (condition) { statement; }` |
| **Example** | `let i = 1;`<br>`while (i <= 5) {`<br>`console.log(i);`<br>`i++;`<br>`}` |

## 5 - for loop

|  |  |
|---|---|
| **Use** | કોડના બ્લોકને ચોક્કસ સંખ્યામાં વારંવાર ચલાવવા માટે ઉપયોગ થાય છે. |
| **Syntax** | `for (initialization; condition; increment/decrement) { statement; }` |
| **Example** | `for (let i = 1; i <= 5; i++) {`<br>`console.log(i);`<br>`}` |

