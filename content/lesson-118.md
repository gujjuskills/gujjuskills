# લેશન - ૧૧૮ : પાયથોન કંટ્રોલ સ્ટેટમેન્ટ્સ

## Control Statement

## 1. Break Statement

**અર્થ:**  
`break` statement નો ઉપયોગ loop ને તરત જ બંધ કરવા માટે થાય છે. જ્યારે `break` execute થાય છે ત્યારે loop આગળની iteration કર્યા વગર સમાપ્ત થઈ જાય છે અને program loop પછીના statement પર જાય છે.

**ઉદાહરણ:**

```
for i in range(1, 6):
    if i == 4:
        break
    print(i)

Output:

1
2
3
```

## 2. Continue Statement

અર્થ:
continue statement નો ઉપયોગ loop ની વર્તમાન iteration ને skip કરવા માટે થાય છે. continue execute થયા પછી loop ની બાકીની statements skip થાય છે અને આગળની iteration શરૂ થાય છે.

ઉદાહરણ:
```
for i in range(1, 6):
    if i == 3:
        continue
    print(i)

Output:

1
2
4
5
```
3. Pass Statement

અર્થ:
pass statement નો ઉપયોગ જ્યારે કોઈ statement લખવાની જરૂર હોય પરંતુ હાલમાં કોઈ action perform કરવો ન હોય ત્યારે થાય છે. pass execute થવાથી program પર કોઈ અસર થતી નથી.

ઉદાહરણ:
```
for i in range(1, 6):
    if i == 3:
        pass
    print(i)

Output:

1
2
3
4
5
```
