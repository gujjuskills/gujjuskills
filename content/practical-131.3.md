# પ્રેકટિકલ-૧૩૧.૩ : JS-6 : કિલોમીટરથી માઈલમાં રૂપાંતરનો પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversion From Kilometer to Mile</title>
</head>

<body>

    <h2>Conversion From Kilometer to Mile</h2>

    <label for="kilometer">Enter Kilometer:</label>
    <input type="number" id="kilometer" placeholder="Enter kilometer">

    <button onclick="convert()">Calculate</button>

    <h3 id="result"></h3>

    <script>
        function convert() {
            let kilometer = document.getElementById("kilometer").value;

            let mile = kilometer * 0.621371;

            document.getElementById("result").innerHTML =
                "Kilometer: " + kilometer + "<br>" +
                "Mile: " + mile;
        }
    </script>

</body>
</html>

```
