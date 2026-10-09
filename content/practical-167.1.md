# પ્રેકટિકલ-૧૬૭.૧ : PY : 9 - સંખ્યા અવિભાજ્ય છે કે નહીં તે તપાસો

```
num = int(input("Enter a number: "))

if num < 2:
    print(num, "is Not a Prime Number.")
else:
    prime = True

    for i in range(2, num):
        if num % i == 0:
            prime = False
            break

    if prime:
        print(num, "is a Prime Number.")
    else:
        print(num, "is Not a Prime Number.")
```
### Output :
```
Enter a number: 21
21 is Not a Prime Number.

Enter a number: 7
7 is a Prime Number.
```
