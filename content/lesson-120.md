# લેશન - ૧૨૦ : પાયથોન ARRAY

### What is Array

Array એ એક જ variable માં એકથી વધુ values store કરવા માટે વપરાતું data structure છે. Python માં Array જેવા કામ માટે સામાન્ય રીતે List નો ઉપયોગ થાય છે. List માં અલગ અલગ પ્રકારની values પણ store કરી શકાય છે.

Example:
```
numbers = [10, 20, 30, 40, 50]
print(numbers)
```
અહીં numbers એક list છે જેમાં 5 values store થયેલી છે.

| Operation | Gujarati Explanation                                                                       |
| --------- | ------------------------------------------------------------------------------------------ |
| Traverse  | Array ના દરેક element ને એક પછી એક access અથવા display કરવાની પ્રક્રિયાને Traverse કહે છે. |
| Insertion | Array માં નવી value ઉમેરવાની પ્રક્રિયાને Insertion કહે છે.                                 |
| Deletion  | Array માંથી કોઈ value અથવા element દૂર કરવાની પ્રક્રિયાને Deletion કહે છે.                 |
| Search    | Array માં કોઈ ચોક્કસ value શોધવાની પ્રક્રિયાને Search કહે છે.                              |
| Update    | Array માં રહેલી value ને નવી value થી બદલવાની પ્રક્રિયાને Update કહે છે.                   |

| Method         | Gujarati Explanation                                 |
| -------------- | ---------------------------------------------------- |
| `append(x)`    | Array/List ના અંતમાં `x` value ઉમેરે છે.             |
| `remove(x)`    | Array/List માંથી `x` ની પ્રથમ occurrence દૂર કરે છે. |
| `count(x)`     | Array/List માં `x` કેટલી વખત આવે છે તે count કરે છે. |
| `reverse()`    | Array/List ના elements નો order ઉલટાવી દે છે.        |
| `insert(i, x)` | Index `i` પર `x` value ઉમેરે છે.                     |


Array : Example – Find Largest Number in an Array

નીચેના program માં Array/List માંથી સૌથી મોટી number શોધવામાં આવી છે.
```
numbers = [10, 25, 5, 40, 15]

largest = numbers[0]

for number in numbers:
    if number > largest:
        largest = number

print("Largest Number:", largest)

Output:

Largest Number: 40

```
