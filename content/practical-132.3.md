# પ્રેકટિકલ-૧૩૨.૩ : JS-9 : આપેલ નંબર આર્મસ્ટ્રોંગ છે કે નહીં તે તપાસવાનો પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html>
<head>
    <title>Armstrong Number</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        .box {
            width: 700px;
            margin: 50px auto;
            padding: 30px;
            background-color: white;
            border: 1px solid #555;
            text-align: center;
        }

        h1 {
            font-size: 30px;
        }

        input {
            width: 250px;
            padding: 10px;
            font-size: 18px;
        }

        button {
            margin-top: 20px;
            padding: 10px 25px;
            font-size: 18px;
            cursor: pointer;
        }

        #result {
            margin-top: 20px;
            font-size: 22px;
            font-weight: bold;
        }
    </style>
</head>

<body>

    <div class="box">

        <h1>Given Number is Armstrong or Not</h1>

        <label>Enter Any Number :</label>

        <input type="number" id="num">

        <br>

        <button onclick="checkArmstrong()">Check here</button>

        <div id="result"></div>

    </div>

    <script>

        function checkArmstrong() {

            let num = document.getElementById("num").value;

            if (num === "") {
                document.getElementById("result").innerHTML =
                    "Please enter a number.";
                return;
            }

            let number = Number(num);
            let originalNumber = number;

            let digits = num.length;
            let sum = 0;

            while (number > 0) {

                let digit = number % 10;

                sum = sum + Math.pow(digit, digits);

                number = Math.floor(number / 10);
            }

            if (sum === originalNumber) {

                document.getElementById("result").innerHTML =
                    originalNumber + " is an Armstrong Number.";

            } else {

                document.getElementById("result").innerHTML =
                    originalNumber + " is Not an Armstrong Number.";

            }
        }

    </script>

</body>
</html>
```
