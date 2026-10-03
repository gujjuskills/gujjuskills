# પ્રેકટિકલ-૧૩૦.૧ : JS-1 : જાવાસ્ક્રિપ્ટ સાથે એક સરળ પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html>
<head>
    <title>Light JavaScript Program</title>

    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }

        #bulb {
            font-size: 150px;
            margin: 30px;
        }

        button {
            padding: 10px 20px;
            margin: 10px;
            cursor: pointer;
            font-size: 16px;
        }
    </style>
</head>

<body>

    <h2>Light JavaScript Program</h2>

    <div id="bulb">💡</div>

    <button onclick="turnOn()">
        Turn on the Light
    </button>

    <button onclick="turnOff()">
        Turn off the Light
    </button>

    <script>
        function turnOn() {
            document.getElementById("bulb").style.opacity = "1";
            document.getElementById("bulb").style.filter =
                "drop-shadow(0 0 25px gold)";
        }

        function turnOff() {
            document.getElementById("bulb").style.opacity = "0.3";
            document.getElementById("bulb").style.filter = "none";
        }
    </script>

</body>
</html>
```

## Code Explanation

`onclick` event is used to execute a JavaScript function when the button is clicked.

```javascript
function turnOn() {
    document.getElementById("bulb").style.opacity = "1";
    document.getElementById("bulb").style.filter =
        "drop-shadow(0 0 25px gold)";
}
```

This function turns the bulb **ON**.

```javascript
function turnOff() {
    document.getElementById("bulb").style.opacity = "0.3";
    document.getElementById("bulb").style.filter = "none";
}
```

This function turns the bulb **OFF**.
