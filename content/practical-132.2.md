# પ્રેકટિકલ-૧૩૨.૨ : JS-8 : આપેલ વર્ષ લિપ વર્ષ છે કે નહીં તે ચકાસવાનો પ્રોગ્રામ બનાવવો

```

<!DOCTYPE html>
<html>
<head>
    <title>Year is Leap or Not</title>

    <style>
        .box {
            width: 700px;
            margin: 50px auto;
            padding: 30px;
            border: 4px solid #222;
            text-align: center;
            font-family: Arial, sans-serif;
        }

        h1 {
            font-size: 32px;
        }

        label {
            font-size: 20px;
            font-weight: bold;
        }

        input {
            width: 250px;
            padding: 10px;
            font-size: 18px;
            margin: 10px;
        }

        button {
            padding: 10px 20px;
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

        <h1>Year is Leap or Not ?</h1>

        <label>Enter Any Year :</label>

        <input type="number" id="year" placeholder="Enter Year">

        <button onclick="checkLeapYear()">Check Here</button>

        <div id="result"></div>

    </div>

    <script>
        function checkLeapYear() {

            let year = document.getElementById("year").value;
            let result = document.getElementById("result");

            if (year == "") {
                result.innerHTML = "Please Enter a Year";
                return;
            }

            if ((year % 400 == 0) || 
                (year % 4 == 0 && year % 100 != 0)) {

                result.innerHTML = year + " is a Leap Year";
            } 
            else {

                result.innerHTML = year + " is Not a Leap Year";
            }
        }
    </script>

</body>
</html>
```
