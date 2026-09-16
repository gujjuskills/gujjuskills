# લેશન - ૮૭ : જાવાસ્ક્રિપ્ટમાં string , math અને date નો પરિચય

| પ્રકાર | વર્ણન |
|---|---|
| By string literal | String literal દ્વારા String બનાવવામાં આવે છે. ઉદાહરણ: `let str = "Hello";` |
| By string object | `String()` constructor દ્વારા String object બનાવવામાં આવે છે. ઉદાહરણ: `let str = new String("Hello");` |

## String in JavaScript : Methods

| Method | ઉપયોગ |
|---|---|
| `charAt()` | આપેલ index પર આવેલ character મેળવવા માટે ઉપયોગ થાય છે. |
| `charCodeAt()` | આપેલ index પર આવેલ character નો Unicode value મેળવવા માટે ઉપયોગ થાય છે. |
| `concat()` | બે અથવા વધુ strings ને જોડવા માટે ઉપયોગ થાય છે. |
| `indexOf()` | String માં આપેલ text અથવા character પ્રથમ વખત કયા index પર આવે છે તે શોધવા માટે ઉપયોગ થાય છે. |
| `lastIndexOf()` | String માં આપેલ text અથવા character છેલ્લે કયા index પર આવે છે તે શોધવા માટે ઉપયોગ થાય છે. |
| `search()` | String માં આપેલ text અથવા regular expression શોધવા માટે ઉપયોગ થાય છે. |
| `match()` | String માં regular expression સાથે મળતા પરિણામો મેળવવા માટે ઉપયોગ થાય છે. |
| `replace()` | String માં આપેલ text ને બીજા text થી બદલવા માટે ઉપયોગ થાય છે. |
| `substr()` | String માંથી આપેલ શરૂઆતના indexથી ચોક્કસ length સુધીનો ભાગ મેળવવા માટે ઉપયોગ થાય છે. |
| `substring()` | String માંથી બે index વચ્ચેનો ભાગ મેળવવા માટે ઉપયોગ થાય છે. |
| `slice()` | String માંથી આપેલ શરૂઆત અને અંતના index વચ્ચેનો ભાગ મેળવવા માટે ઉપયોગ થાય છે. |
| `toLowerCase()` | String ના બધા characters ને lowercase માં બદલવા માટે ઉપયોગ થાય છે. |
| `toUpperCase()` | String ના બધા characters ને uppercase માં બદલવા માટે ઉપયોગ થાય છે. |
| `toString()` | Value ને String માં રૂપાંતરિત કરવા માટે ઉપયોગ થાય છે. |
| `valueOf()` | String object ની primitive string value મેળવવા માટે ઉપયોગ થાય છે. |

## Math in JavaScript : Methods

| Method | ઉપયોગ |
|---|---|
| `abs()` | સંખ્યાનું absolute value મેળવવા માટે ઉપયોગ થાય છે. |
| `acos()` | સંખ્યાનું inverse cosine value radians માં મેળવવા માટે ઉપયોગ થાય છે. |
| `asin()` | સંખ્યાનું inverse sine value radians માં મેળવવા માટે ઉપયોગ થાય છે. |
| `atan()` | સંખ્યાનું inverse tangent value radians માં મેળવવા માટે ઉપયોગ થાય છે. |
| `cbrt()` | સંખ્યાનું cube root મેળવવા માટે ઉપયોગ થાય છે. |
| `ceil()` | સંખ્યાને ઉપરની સૌથી નજીકની પૂર્ણ સંખ્યામાં ફેરવવા માટે ઉપયોગ થાય છે. |
| `cos()` | આપેલ angle નું cosine value મેળવવા માટે ઉપયોગ થાય છે. |
| `cosh()` | સંખ્યાનું hyperbolic cosine value મેળવવા માટે ઉપયોગ થાય છે. |
| `exp()` | e ની આપેલ સંખ્યાની power મેળવવા માટે ઉપયોગ થાય છે. |
| `floor()` | સંખ્યાને નીચેની સૌથી નજીકની પૂર્ણ સંખ્યામાં ફેરવવા માટે ઉપયોગ થાય છે. |
| `hypot()` | આપેલ સંખ્યાઓના squares ના સરવાળાના square root મેળવવા માટે ઉપયોગ થાય છે. |
| `log()` | સંખ્યાનું natural logarithm મેળવવા માટે ઉપયોગ થાય છે. |
| `max()` | આપેલ સંખ્યાઓમાંથી સૌથી મોટી સંખ્યા મેળવવા માટે ઉપયોગ થાય છે. |
| `min()` | આપેલ સંખ્યાઓમાંથી સૌથી નાની સંખ્યા મેળવવા માટે ઉપયોગ થાય છે. |
| `pow()` | આપેલ સંખ્યાની power ગણવા માટે ઉપયોગ થાય છે. |
| `random()` | 0 inclusive થી 1 exclusive વચ્ચે random number મેળવવા માટે ઉપયોગ થાય છે. |
| `round()` | સંખ્યાને સૌથી નજીકની પૂર્ણ સંખ્યામાં round કરવા માટે ઉપયોગ થાય છે. |
| `sign()` | સંખ્યા positive, negative અથવા zero છે તે દર્શાવતું value આપે છે. |
| `sin()` | આપેલ angle નું sine value મેળવવા માટે ઉપયોગ થાય છે. |
| `sinh()` | સંખ્યાનું hyperbolic sine value મેળવવા માટે ઉપયોગ થાય છે. |
| `sqrt()` | સંખ્યાનું square root મેળવવા માટે ઉપયોગ થાય છે. |
| `tan()` | આપેલ angle નું tangent value મેળવવા માટે ઉપયોગ થાય છે. |
| `tanh()` | સંખ્યાનું hyperbolic tangent value મેળવવા માટે ઉપયોગ થાય છે. |
| `trunc()` | સંખ્યાનો decimal ભાગ દૂર કરીને માત્ર integer ભાગ મેળવવા માટે ઉપયોગ થાય છે. |

## Date in JavaScript : Methods

| Method | ઉપયોગ |
|---|---|
| `getFullYear()` | Date માંથી સંપૂર્ણ વર્ષ મેળવવા માટે ઉપયોગ થાય છે. |
| `getMonth()` | Date માંથી મહિનો મેળવવા માટે ઉપયોગ થાય છે. January માટે value `0` અને December માટે `11` હોય છે. |
| `getDate()` | Date માંથી મહિનાની તારીખ મેળવવા માટે ઉપયોગ થાય છે. |
| `getDay()` | Date માંથી અઠવાડિયાનો દિવસ મેળવવા માટે ઉપયોગ થાય છે. Sunday માટે value `0` અને Saturday માટે `6` હોય છે. |
| `getHours()` | Date માંથી કલાક મેળવવા માટે ઉપયોગ થાય છે. |
| `getMinutes()` | Date માંથી મિનિટ મેળવવા માટે ઉપયોગ થાય છે. |
| `getSeconds()` | Date માંથી seconds મેળવવા માટે ઉપયોગ થાય છે. |
| `getMilliseconds()` | Date માંથી milliseconds મેળવવા માટે ઉપયોગ થાય છે. |
| `getTime()` | 1 January 1970 થી આપેલ Date સુધીના milliseconds મેળવવા માટે ઉપયોગ થાય છે. |
| `setDate()` | Date ની તારીખ બદલવા માટે ઉપયોગ થાય છે. |
| `setFullYear()` | Date નું સંપૂર્ણ વર્ષ બદલવા માટે ઉપયોગ થાય છે. |
| `setHours()` | Date ના કલાક બદલવા માટે ઉપયોગ થાય છે. |
| `setMilliseconds()` | Date ના milliseconds બદલવા માટે ઉપયોગ થાય છે. |
| `setMinutes()` | Date ની minutes બદલવા માટે ઉપયોગ થાય છે. |
| `setMonth()` | Date નો મહિનો બદલવા માટે ઉપયોગ થાય છે. |
| `setSeconds()` | Date ના seconds બદલવા માટે ઉપયોગ થાય છે. |
| `setTime()` | milliseconds value નો ઉપયોગ કરીને Date બદલવા માટે ઉપયોગ થાય છે. |
