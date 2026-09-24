# લેશન - ૧૧૪.૨ : કાસ્ટિંગ , સ્ટ્રિંગ , બુલિયન - ૨

## What is String :

String એટલે અક્ષરો, શબ્દો અથવા વાક્યોનો સમૂહ. Python માં String ને Single Quote (`' '`), Double Quote (`" "`) અથવા Triple Quote (`''' '''` / `""" """`) ની અંદર લખવામાં આવે છે.

### Example :
``` 
name = "GujjuSkills"
city = 'Ahmedabad'
message = "Welcome to Python"
```
### String Operator 
| Operator | ગુજરાતી સમજણ                                                                                          |
| -------- | ----------------------------------------------------------------------------------------------------- |
| `+`      | બે અથવા વધુ String ને જોડવા માટે ઉપયોગ થાય છે.                                                        |
| `*`      | String ને એક કરતાં વધુ વખત પુનરાવર્તિત કરવા માટે ઉપયોગ થાય છે.                                        |
| `[]`     | String માંથી ચોક્કસ character મેળવવા માટે ઉપયોગ થાય છે. તેને Indexing કહેવામાં આવે છે.                |
| `[:]`    | String નો ચોક્કસ ભાગ મેળવવા માટે ઉપયોગ થાય છે. તેને Slicing કહેવામાં આવે છે.                          |
| `in`     | કોઈ character અથવા String બીજી String માં હાજર છે કે નહીં તે ચકાસે છે.                                |
| `not in` | કોઈ character અથવા String બીજી String માં હાજર નથી કે નહીં તે ચકાસે છે.                               |
| `r/R`    | Raw String બનાવવા માટે ઉપયોગ થાય છે. તેમાં Escape Sequence ને સામાન્ય character તરીકે ગણવામાં આવે છે. |
| `%`      | String Formatting માટે ઉપયોગ થાય છે.                                                                  |

## Escape Sqqence 

| Escape Sequence | ગુજરાતી સમજણ                                   |
| --------------- | ---------------------------------------------- |
| `\newline`      | Line continuation માટે ઉપયોગ થાય છે.           |
| `\\`            | Backslash (`\`) દર્શાવવા માટે ઉપયોગ થાય છે.    |
| `\'`            | Single Quote (`'`) દર્શાવવા માટે ઉપયોગ થાય છે. |
| `\"`            | Double Quote (`"`) દર્શાવવા માટે ઉપયોગ થાય છે. |
| `\a`            | Alert અથવા Bell માટે ઉપયોગ થાય છે.             |
| `\b`            | Backspace માટે ઉપયોગ થાય છે.                   |
| `\f`            | Form Feed માટે ઉપયોગ થાય છે.                   |
| `\n`            | નવી Line શરૂ કરવા માટે ઉપયોગ થાય છે.           |
| `\r`            | Carriage Return માટે ઉપયોગ થાય છે.             |
| `\t`            | Horizontal Tab માટે ઉપયોગ થાય છે.              |

### What is Boolean :

Boolean એ Python નો એક Data Type છે, જેનો ઉપયોગ માત્ર બે values દર્શાવવા માટે થાય છે:

True
False

True એટલે શરત સાચી છે અને False એટલે શરત ખોટી છે.

Example :
a = 10
b = 20
``` 
print(a < b)
print(a > b)

Output :

True
False
``` 
Boolean નો ઉપયોગ સામાન્ય રીતે Condition અને Decision Making માટે થાય છે.

### Function : bool()

bool() Function કોઈ Value ને Boolean Value (True અથવા False) માં Convert કરવા માટે ઉપયોગ થાય છે.

Example :
```
print(bool(1))
print(bool(0))
print(bool("Hello"))
print(bool(""))

Output :

True
False
True
False
``` 
યાદ રાખવું :
0        → False
1        → True
""       → False
"Hello"  → True

સામાન્ય રીતે 0, ખાલી String, ખાલી List વગેરે False ગણાય છે, જ્યારે બાકીની ઘણી Values True ગણાય છે.
