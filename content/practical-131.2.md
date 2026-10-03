# પ્રેકટિકલ-૧૩૦.૨ : JS-2 : જાવાસ્ક્રિપ્ટ (ફંક્શન નો ઉપયોગ ) સાથે પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>

<body>

<h1>Simple Calculator</h1>

Enter 1st Value:
<input type="text" id="num1">
<br><br>

Enter 2nd Value:
<input type="text" id="num2">
<br><br>

Your Answer is:
<input type="text" id="ans" readonly>
<br><br>

<button onclick="
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    document.getElementById('ans').value = a + b;
">+</button>

<button onclick="
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    document.getElementById('ans').value = a - b;
">-</button>

<button onclick="
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    document.getElementById('ans').value = a * b;
">×</button>

<button onclick="
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    document.getElementById('ans').value = a / b;
">÷</button>

</body>
</html>
```
