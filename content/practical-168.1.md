# પ્રેકટિકલ-૧૬૮.૧ : PY : 11 - સંખ્યા પેલિન્ડ્રૉમ છે કે નહીં તે તપાસો

```
num = int(input("Enter a number: "))

temp = num
reverse = 0

while temp > 0:
    digit = temp % 10
    reverse = reverse * 10 + digit
    temp = temp // 10

if num == reverse:
    print(num, "is a Palindrome Number.")
else:
    print(num, "is not a Palindrome Number.")

Output :

Enter a number: 121
121 is a Palindrome Number.
```
