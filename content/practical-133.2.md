# પ્રેકટિકલ-૧૩૩.૨ : JS-11 : આપેલ બધાા અંકોના સરવાળા નો પ્રોગ્રામ બનાવવો
```
<!DOCTYPE html>
<html>
<head>
    <title>All Digit Addition</title>
</head>

<body>

    <h1>All Digit Addition</h1>

    <label>Enter Any Number:</label>
    <input type="number" id="num" value="143">

    <button onclick="sumDigits()">Check Here</button>

    <br><br>

    <label>Sum of All Digit:</label>
    <input type="text" id="result" readonly>

    <script>
        function sumDigits() {
            let num = document.getElementById("num").value;
            let sum = 0;

            for (let i = 0; i < num.length; i++) {
                sum = sum + Number(num[i]);
            }

            document.getElementById("result").value = sum;
        }
    </script>

</body>
</html>
```
