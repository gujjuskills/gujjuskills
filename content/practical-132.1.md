# પ્રેકટિકલ-૧૩૨.૧ : JS-7 : આપલે નંબર પ્રાઇમ છે કે નહીં તે તપાસવાનો પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html>
<head>
    <title>Prime Number Checker</title>
</head>
<body>

    <h2>Number is Prime or Not?</h2>

    <label>Enter Any Number:</label>
    <input type="number" id="number" value="11">

    <button onclick="checkPrime()">Check Here</button>

    <h3 id="result"></h3>

    <script>
        function checkPrime() {

            let number = parseInt(document.getElementById("number").value);
            let isPrime = true;

            if (number <= 1) {
                isPrime = false;
            } else {
                for (let i = 2; i < number; i++) {
                    if (number % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime) {
                document.getElementById("result").innerHTML =
                    number + " is a Prime Number.";
            } else {
                document.getElementById("result").innerHTML =
                    number + " is Not a Prime Number.";
            }
        }
    </script>

</body>
</html>
