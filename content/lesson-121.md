# લેશન - ૧૨૧ : પાયથોન ઇટરેટર્સ, મોડ્યુલ્સ , ડેટ્સ , મેથ

## Iterators in Python

Iterator એ Python માં એવો object છે જે collection ના elements ને એક પછી એક access કરવાની સુવિધા આપે છે.

| Topic | ગુજરાતી સમજણ |
|---|---|
| `iter()` | કોઈ iterable object માંથી iterator બનાવે છે. |
| `next()` | Iterator માંથી આગળનું element આપે છે. |
| `StopIteration` | Iterator ના બધા elements પૂરા થઈ જાય ત્યારે આ exception મળે છે. |
| `for` loop | Iterator નો ઉપયોગ કરીને elements ને એક પછી એક access કરે છે. |

### Example

```
numbers = [10, 20, 30]

it = iter(numbers)

print(next(it))
print(next(it))
print(next(it))

Output:
10
20
30
```
### Modules in Python

Module એટલે Python code ધરાવતી .py file, જેમાં functions, variables અને classes રાખી શકાય છે અને તેને બીજા Python program માં ઉપયોગ કરી શકાય છે.

Topic	ગુજરાતી સમજણ
import	Module ને program માં ઉપયોગ કરવા માટે import કરે છે.
from ... import	Module માંથી ચોક્કસ function અથવા object import કરવા માટે વપરાય છે.
Built-in Module	Python સાથે પહેલેથી ઉપલબ્ધ module, જેમ કે math, datetime.
User-defined Module	Programmer દ્વારા બનાવવામાં આવેલ module.

#### Example
```
import math

print(math.sqrt(25))

Output:

5.0
```
#### Date : Useful Functions

| Function      | ગુજરાતી સમજણ                                                                |
| ------------- | --------------------------------------------------------------------------- |
| `now()`       | વર્તમાન તારીખ અને સમય મેળવવા માટે વપરાય છે.                                 |
| `date()`      | તારીખ મેળવવા અથવા date object બનાવવા માટે વપરાય છે.                         |
| `strftime()`  | Date અથવા time ને આપેલા format પ્રમાણે string માં બદલવા માટે વપરાય છે.      |
| `timedelta()` | બે તારીખ અથવા સમય વચ્ચેનો સમયગાળો ઉમેરવા અથવા ઘટાડવા માટે વપરાય છે.         |
| `strptime()`  | String માં રહેલી તારીખ અથવા સમયને date/time object માં બદલવા માટે વપરાય છે. |

#### Math : Useful Functions

| Function             | ગુજરાતી સમજણ                                                                                               |
| -------------------- | ---------------------------------------------------------------------------------------------------------- |
| `sqrt()`             | કોઈ સંખ્યાનું square root શોધવા માટે વપરાય છે.                                                             |
| `pow()`              | કોઈ સંખ્યાની power શોધવા માટે વપરાય છે.                                                                    |
| `ceil()` / `floor()` | `ceil()` સંખ્યાને ઉપરની નજીકની પૂર્ણ સંખ્યા તરફ અને `floor()` નીચેની નજીકની પૂર્ણ સંખ્યા તરફ round કરે છે. |
| `pi`                 | Pi ની value આપે છે, જે લગભગ `3.14159` છે.                                                                  |
| `factorial()`        | આપેલી સંખ્યાનું factorial શોધવા માટે વપરાય છે.                                                             |
