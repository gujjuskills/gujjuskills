# પ્રેકટિકલ-૧૩૪.૩ : JS-15 : કયા વર્ષે 1 જાન્યુઆરી એ રવિવાર હશે તે ચકસવાનો પ્રોગ્રામ બનાવવો
``` 
<!DOCTYPE html>
<html>
<head>
    <title>Which Year 1st January Will Be Sunday?</title>

    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            width: 550px;
            margin: 50px auto;
            padding: 25px;
            border: 3px solid black;
        }

        h2 {
            text-align: center;
        }

        label {
            display: inline-block;
            width: 70px;
            margin-top: 15px;
        }

        input {
            padding: 7px;
            width: 200px;
        }

        button {
            margin-top: 20px;
            padding: 8px 15px;
            cursor: pointer;
        }

        #result {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>

<body>

<div class="container">

    <h2>Which Year 1st January Will Be Sunday?</h2>

    <p>
        Enter the value of Year1 & Year2 in the input box
        to get year's having Sunday on 1st January.
    </p>

    <label>Year1:</label>
    <input type="number" id="year1" value="2014">

    <br>

    <label>Year2:</label>
    <input type="number" id="year2" value="2050">

    <br>

    <button onclick="findSundayYears()">Get Result</button>

    <div id="result"></div>

</div>

<script>

function findSundayYears() {

    let year1 = parseInt(document.getElementById("year1").value);
    let year2 = parseInt(document.getElementById("year2").value);

    let result = "";

    if (isNaN(year1) || isNaN(year2)) {
        document.getElementById("result").innerHTML =
            "Please enter both years.";
        return;
    }

    if (year1 > year2) {
        let temp = year1;
        year1 = year2;
        year2 = temp;
    }

    let sundayYears = [];

    for (let year = year1; year <= year2; year++) {

        // January 1 of the given year
        let date = new Date(year, 0, 1);

        // getDay() returns:
        // 0 = Sunday
        // 1 = Monday
        // 2 = Tuesday
        // 3 = Wednesday
        // 4 = Thursday
        // 5 = Friday
        // 6 = Saturday

        if (date.getDay() === 0) {
            sundayYears.push(year);
        }
    }

    if (sundayYears.length > 0) {
        result = "1st January was Sunday in: " +
                 sundayYears.join(", ");
    } else {
        result = "No year found in the given range.";
    }

    document.getElementById("result").innerHTML = result;
}

</script>

</body>
</html>
```
