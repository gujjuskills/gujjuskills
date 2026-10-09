# પ્રેકટિકલ-૧૬૭.૨ : PY : 10 - સંખ્યા આર્મસ્ટ્રોંગ છે કે નહીં તે તપાસો

```
num = int(input("Enter a number: "))

temp = num
digits = len(str(num))
sum = 0

while temp > 0:
    digit = temp % 10
    sum = sum + digit ** digits
    temp = temp // 10

if sum == num:
    print(num, "is an Armstrong Number.")
else:
    print(num, "is not an Armstrong Number.")
```
### Output :
```
Enter a number: 153
153 is an Armstrong Number.
```
