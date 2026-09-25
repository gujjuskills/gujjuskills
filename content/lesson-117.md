# લેશન - ૧૧૭ : પાયથોન લુપસ

### 1. While Loop

વર્ણન:
while loop માં જ્યાં સુધી આપેલી condition True હોય ત્યાં સુધી loop વારંવાર execute થાય છે.
```
Syntax:

while condition:
    statement

Example:

i = 1

while i <= 5:
    print(i)
    i += 1

Output:

1
2
3
4
5
``` 
સમજૂતી:
અહીં i <= 5 condition ચકાસવામાં આવે છે. Condition True હોય ત્યાં સુધી print(i) execute થાય છે. દરેક iteration પછી i ની value 1 થી વધે છે.

### 2. For Loop

વર્ણન:
for loop નો ઉપયોગ કોઈ sequence, list, string અથવા range ના દરેક element પર એક પછી એક operation કરવા માટે થાય છે.
```
Syntax:

for variable in sequence:
    statement

Example:

for i in range(1, 6):
    print(i)

Output:

1
2
3
4
5
```
સમજૂતી:
range(1
6) માં 1 થી 5 સુધીની values મળે છે. for loop દરેક value ને i માં store કરીને statement execute કરે છે.

### 3. Nested Loops

વર્ણન:
જ્યારે એક loop ની અંદર બીજો loop હોય ત્યારે તેને Nested Loops કહેવામાં આવે છે.
```
Syntax:

for variable1 in sequence:
    for variable2 in sequence:
        statement

Example:

for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)

Output:

1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```
સમજૂતી:
અહીં outer for loop દરેક value માટે inner for loop ને સંપૂર્ણ રીતે execute કરે છે. એટલે outer loop 3 વખત અને દરેક વખતે inner loop 3 વખત execute થાય છે.
