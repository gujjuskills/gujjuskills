# પ્રેકટિકલ-૧૩૦.૩ : JS-3 : વર્તુળના ક્ષેત્રફળ , વ્યાસ અને પરીમીતીની ગણતરી કરો

```
<!DOCTYPE html>
<html>
<head>
    <title>Circle's Area, Diameter & Perimeter</title>

    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .box {
            width: 500px;
            border: 3px solid black;
            padding: 20px;
            margin: 50px auto;
        }

        h1 {
            font-size: 28px;
        }

        input {
            padding: 8px;
            width: 200px;
        }

        button {
            padding: 8px 15px;
            margin-top: 15px;
            cursor: pointer;
        }

        #result {
            margin-top: 20px;
            font-size: 18px;
            line-height: 1.8;
        }
    </style>
</head>

<body>

    <div class="box">

        <h1>Circle's Area, Diameter & Perimeter</h1>

        <label>Enter Radius :</label>
        <input type="number" id="radius">

        <br>

        <button onclick="calculateCircle()">
            Calculate here
        </button>

        <div id="result"></div>

    </div>

    <script>

        function calculateCircle() {

            let radius = document.getElementById("radius").value;

            if (radius == "" || radius <= 0) {
                document.getElementById("result").innerHTML =
                    "Please enter a valid radius.";
                return;
            }

            let area = Math.PI * radius * radius;
            let diameter = 2 * radius;
            let perimeter = 2 * Math.PI * radius;

            document.getElementById("result").innerHTML =
                "Area = " + area.toFixed(2) + "<br>" +
                "Diameter = " + diameter.toFixed(2) + "<br>" +
                "Perimeter = " + perimeter.toFixed(2);
        }

    </script>

</body>
</html>

```
