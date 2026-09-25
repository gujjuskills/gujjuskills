# લેશન - ૧૧૬ : પાયથોન સ્ટેટમેન્ટ્સ

# Conditional Statements

## 1. If statement

**અર્થ:**  
`if` statement નો ઉપયોગ કોઈ ચોક્કસ condition ચકાસવા માટે થાય છે. જો condition `True` હોય તો `if` block ની અંદરનો code execute થાય છે. જો condition `False` હોય તો `if` block skip થઈ જાય છે.

### Syntax

```python
if condition:
    statement
```

### Example

```python
age = 18

if age >= 18:
    print("You are eligible to vote.")
```

### Output

```text
You are eligible to vote.
```

### Explanation

અહીં `age >= 18` condition ચકાસવામાં આવે છે. `age` ની value `18` હોવાથી condition `True` થાય છે અને message print થાય છે.

---

## 2. If-else statement

**અર્થ:**  
`if-else` statement નો ઉપયોગ બે અલગ અલગ પરિસ્થિતિમાંથી એક પસંદ કરવા માટે થાય છે. જો `if` ની condition `True` હોય તો `if` block execute થાય છે. જો condition `False` હોય તો `else` block execute થાય છે.

### Syntax

```python
if condition:
    statement1
else:
    statement2
```

### Example

```python
marks = 35

if marks >= 33:
    print("Pass")
else:
    print("Fail")
```

### Output

```text
Pass
```

### Explanation

અહીં `marks >= 33` condition ચકાસવામાં આવે છે. `marks` ની value `35` હોવાથી condition `True` છે અને `Pass` print થાય છે. જો marks 33 કરતાં ઓછા હોત તો `Fail` print થાત.

---

## 3. Nested if statement

**અર્થ:**  
એક `if` statement ની અંદર બીજું `if` statement લખવામાં આવે તેને **Nested if statement** કહેવામાં આવે છે. તેનો ઉપયોગ એક condition સાચી થયા પછી બીજી condition ચકાસવા માટે થાય છે.

### Syntax

```python
if condition1:
    if condition2:
        statement
```

### Example

```python
age = 20
citizen = True

if age >= 18:
    if citizen == True:
        print("You are eligible to vote.")
```

### Output

```text
You are eligible to vote.
```

### Explanation

સૌ પ્રથમ `age >= 18` condition ચકાસાય છે. તે `True` હોવાથી અંદરનું `if` execute થાય છે. ત્યારબાદ `citizen == True` condition ચકાસાય છે. આ condition પણ `True` હોવાથી message print થાય છે.
