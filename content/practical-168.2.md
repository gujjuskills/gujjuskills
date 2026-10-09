# પ્રેકટિકલ-૧૬૮.૨ : PY : 12 - વર્ષ લિપ વર્ષ છે કે નહીં તે તપાસો

```
year = int(input("Enter a year: "))

if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
    print(year, "is a Leap Year.")
else:
    print(year, "is Not a Leap Year.")
```
### Output:
```
Enter a year: 2026
2026 is Not a Leap Year.

```
