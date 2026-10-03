# પ્રેકટિકલ-૧૩૩.૧ : JS-10 : એક સરળ ડાયનેમિક પિરામિડ નો પ્રોગ્રામ બનાવો

```
<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Pyramid</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 30px;
        }

        .container {
            border: 3px solid black;
            padding: 25px;
            max-width: 750px;
            margin: auto;
        }

        h1 {
            margin-top: 0;
        }

        input {
            width: 200px;
            padding: 8px;
            font-size: 16px;
        }

        button {
            padding: 9px 18px;
            font-size: 16px;
            cursor: pointer;
        }

        #pyramid {
            margin-top: 25px;
            text-align: center;
            font-family: monospace;
            font-size: 20px;
            line-height: 1.5;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Dynamic Pyramid</h1>

    <label>Enter Any Number</label>

    <input type="number" id="number" value="10" min="1">

    <button onclick="createPyramid()">Check Here</button>

    <div id="pyramid"></div>

</div>


<script>

function createPyramid() {

    // Get the number entered by the user
    let n = parseInt(document.getElementById("number").value);

    // Get the output area
    let output = document.getElementById("pyramid");

    // Clear previous output
    output.innerHTML = "";

    // Check for invalid number
    if (isNaN(n) || n < 1) {
        output.innerHTML = "Please enter a valid number.";
        return;
    }

    // Create pyramid
    for (let i = 1; i <= n; i++) {

        let spaces = "";
        let numbers = "";

        // Add spaces for pyramid shape
        for (let j = 1; j <= n - i; j++) {
            spaces += "&nbsp;&nbsp;";
        }

        // Add numbers
        for (let j = 1; j <= i; j++) {
            numbers += j + " ";
        }

        // Display one row
        output.innerHTML += spaces + numbers + "<br>";
    }
}

</script>

</body>
</html>
```
