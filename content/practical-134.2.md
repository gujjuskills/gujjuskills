# પ્રેકટિકલ-૧૩૪.૨ : JS-14 : આપેલ અક્ષર સ્વર / વ્યંજન છે કે નહીં તે ચકસવાનો પ્રોગ્રામ બનાવવો

```
<!DOCTYPE html>
<html>
<head>
    <title>Vowel or Consonant</title>

    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .box {
            width: 600px;
            margin: 50px auto;
            padding: 25px;
            border: 4px solid #333;
            text-align: center;
        }

        h1 {
            font-size: 28px;
        }

        input {
            padding: 8px;
            width: 220px;
            font-size: 16px;
        }

        button {
            padding: 8px 15px;
            font-size: 16px;
            cursor: pointer;
        }

        #result {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>

<body>

    <div class="box">

        <h1>Character is Vowel or Consonant...?</h1>

        <label>Enter Any Character :</label>

        <input type="text" id="character" maxlength="1">

        <button onclick="checkCharacter()">Check Here</button>

        <div id="result"></div>

    </div>


    <script>
        function checkCharacter() {

            let ch = document.getElementById("character").value;

            if (ch === "") {
                document.getElementById("result").innerHTML =
                    "Please enter a character.";
                return;
            }

            ch = ch.toLowerCase();

            if (ch >= 'a' && ch <= 'z') {

                if (
                    ch === 'a' ||
                    ch === 'e' ||
                    ch === 'i' ||
                    ch === 'o' ||
                    ch === 'u'
                ) {
                    document.getElementById("result").innerHTML =
                        "Given Character is Vowel.";
                }
                else {
                    document.getElementById("result").innerHTML =
                        "Given Character is Consonant.";
                }

            }
            else {
                document.getElementById("result").innerHTML =
                    "Please enter an English alphabet.";
            }
        }
    </script>

</body>
</html>
```
