# પ્રેકટિકલ-૧૬૬.૨ : PY : 8 - એક સાદું કેલ્ક્યુલેટર બનાવો

# Simple Calculator
```
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")

choice = int(input("Enter your choice: "))

if choice == 1:
    print("Result =", a + b)
elif choice == 2:
    print("Result =", a - b)
elif choice == 3:
    print("Result =", a * b)
elif choice == 4:
    print("Result =", a / b)
else:
    print("Invalid choice")
```
### Output :
```
Enter first number: 10
Enter second number: 2

1. Addition
2. Subtraction
3. Multiplication
4. Division

Enter your choice: 4
Result = 5.0
```
