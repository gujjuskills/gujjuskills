# પ્રેકટિકલ-૧૭૦.૧ : PY : 15 - ITIના વિદ્યાર્થીઓ માટે ગ્રેડ કેલક્યુલેટર બનાવો

```
# Grade Calculator for ITI Students

marks = float(input("Enter Marks (0-100): "))

if marks < 0 or marks > 100:
    print("Invalid Marks! Please enter marks between 0 and 100.")
else:
    if marks >= 80:
        grade = "A"
    elif marks >= 70:
        grade = "B"
    elif marks >= 60:
        grade = "C"
    elif marks >= 50:
        grade = "D"
    elif marks >= 40:
        grade = "E"
    else:
        grade = "F"

    print("\n----- Grade Calculator -----")
    print("Marks :", marks)
    print("Grade :", grade)

Output :
Enter Marks (0-100): 75

----- Grade Calculator -----
Marks : 75.0
Grade : B
```
