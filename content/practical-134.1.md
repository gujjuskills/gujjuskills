# પ્રેકટિકલ-૧૩૪.૧ : JS-13 : ડાયનેમિક ત્રિકોણ પિરામિડ બનાવતો પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Triangle Dynamic Pyramid</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        .container {
            width: 700px;
            max-width: 90%;
            margin: 50px auto;
            padding: 25px;
            background-color: white;
            border: 3px solid #222;
            box-shadow: 0 0 10px #999;
        }

        h1 {
            text-align: center;
            margin-bottom: 30px;
        }

        .input-box {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        label {
            font-size: 20px;
            font-weight: bold;
        }

        input {
            width: 150px;
            padding: 10px;
            font-size: 18px;
        }

        button {
            padding: 10px 18px;
            font-size: 17px;
            cursor: pointer;
        }

        #result {
            margin-top: 30px;
            text-align: center;
            font-family: monospace;
            font-size: 22px;
            line-height: 1.5;
            white-space: pre;
        }
    </style>
</head>

<body>

    <div class="container">

        <h1>Triangle Dynamic Pyramid</h1>

        <div class="input-box">

            <label for="number">
                Enter Any Number:
            </label>

            <input
                type="number"
                id="number"
                placeholder="Enter number"
                min="1"
            >

            <button onclick="createPyramid()">
                Check Here
            </button>

        </div>

        <div id="result"></div>

    </div>

    <script>

        function createPyramid() {

            let number = document.getElementById("number").value;
            let result = document.getElementById("result");

            number = Number(number);

            if (number <= 0 || isNaN(number)) {

                result.innerHTML = "Please enter a valid number.";
                return;

            }

            let pyramid = "";

            for (let i = 1; i <= number; i++) {

                // Add spaces before numbers
                for (let space = 1; space <= number - i; space++) {
                    pyramid += " ";
                }

                // Add numbers
                for (let j = 1; j <= i; j++) {
                    pyramid += j + " ";
                }

                pyramid += "\n";
            }

            result.textContent = pyramid;
        }

    </script>

</body>
</html>
```
