# પ્રેકટિકલ-૧૩૧.૧ : JS-4 : આપેલ સંખ્યા સમ છે કે વિષમ તેનો પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html>
<head>
    <title>Odd or Even</title>

    <script>
        function checkNumber() {
            var num = document.getElementById("number").value;

            if (num === "") {
                alert("Please enter a number.");
                return;
            }

            if (num % 2 == 0) {
                alert("Number is Even");
            } else {
                alert("Number is Odd");
            }
        }
    </script>
</head>

<body>

    <h1>Number is Odd or Even?</h1>

    <label>Enter Any Number:</label>

    <input type="number" id="number">

    <br><br>

    <button onclick="checkNumber()">Check Here</button>

</body>
</html>
```
