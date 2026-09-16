# લેશન - ૮૬ : જાવાસ્ક્રિપ્ટ એરેનો ઉપયોગ

## What is Array ?

Array એ એક એવી data structure છે, જેમાં એક જ variable માં એક કરતાં વધુ values ને ક્રમબદ્ધ રીતે store કરી શકાય છે. JavaScript માં Array ના elements નો index `0` થી શરૂ થાય છે.

---

## Creating Array

| રીત | ઉદાહરણ |
|---|---|
| **By array literal** | `let fruits = ["Apple", "Banana", "Mango"];` |
| **By creating instance of Array directly** | `let fruits = new Array("Apple", "Banana", "Mango");` |
| **By using an Array constructor** | `let fruits = new Array("Apple", "Banana", "Mango");` |

---

| Property | વર્ણન |
|---|---|
| **constructor** | Array કયા constructor દ્વારા બનાવવામાં આવ્યો છે તે દર્શાવે છે. |
| **length** | Array માં રહેલા elements ની સંખ્યા દર્શાવે છે. |
| **prototype** | Array object માં properties અને methods ઉમેરવા માટે ઉપયોગ થાય છે. |

---

## Array Methods

| Method | ઉપયોગ |
|---|---|
| **concat()** | બે અથવા વધુ arrays ને જોડીને નવું array બનાવે છે. |
| **every()** | Array ના દરેક element માટે આપેલી condition ચકાસે છે. બધા elements condition સાચી હોય તો `true` આપે છે. |
| **forEach()** | Array ના દરેક element પર આપેલું function ચલાવે છે. |
| **indexOf()** | આપેલ element નું પ્રથમ index શોધે છે. element ન મળે તો `-1` આપે છે. |
| **lastIndexOf()** | આપેલ element નું છેલ્લું index શોધે છે. |
| **pop()** | Array માંથી છેલ્લો element દૂર કરે છે અને તેને return કરે છે. |
| **push()** | Array ના અંતમાં એક અથવા વધુ elements ઉમેરે છે. |
| **reduce()** | Array ના elements ને એક single value માં રૂપાંતરિત કરે છે. |
| **reverse()** | Array ના elements નો ક્રમ ઉલટાવી દે છે. |
| **shift()** | Array માંથી પ્રથમ element દૂર કરે છે અને તેને return કરે છે. |
| **slice()** | Array ના એક ભાગને copy કરીને નવું array બનાવે છે. |
| **some()** | Array માં ઓછામાં ઓછો એક element condition પૂર્ણ કરે છે કે નહીં તે ચકાસે છે. |
| **toSource()** | Object ના source code ને દર્શાવતું string return કરે છે. |
| **sort()** | Array ના elements ને ક્રમમાં ગોઠવે છે. |
| **splice()** | Array માં elements ઉમેરવા, દૂર કરવા અથવા બદલવા માટે ઉપયોગ થાય છે. |
| **toString()** | Array ને string માં રૂપાંતરિત કરે છે. |
| **unshift()** | Array ની શરૂઆતમાં એક અથવા વધુ elements ઉમેરે છે. |
