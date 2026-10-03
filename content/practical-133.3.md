# પ્રેકટિકલ-૧૩૩.૩ : JS-12 : આપેલ સંખ્યા ધન , ઋણ કે શૂન્ય છે તે ચકાસવાનો પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html>
<head>
    <title>Positive, Negative or Zero</title>
</head>

<body>

    <h2>Given Number is Positive, Negative or Zero</h2>

    <label>Enter Any Number:</label>
    <input type="number" id="number">

    <br><br>

    <button onclick="checkNumber()">Check here</button>

    <p id="result"></p>

    <script>
        function checkNumber() {

            let num = Number(document.getElementById("number").value);

            if (num > 0) {
                document.getElementById("result").innerHTML =
                    "Given Number is Positive.";
            }
            else if (num < 0) {
                document.getElementById("result").innerHTML =
                    "Given Number is Negative.";
            }
            else {
                document.getElementById("result").innerHTML =
                    "Given Number is Zero.";
            }
        }
    </script>

</body>
</html>
```
