# પ્રેકટિકલ-૧૨૮.૧૭ : HTML-17 : Sign Up ફોર્મ બનાવવા


```html
<!DOCTYPE html>
<html>
<head>
    <title>Sign Up Form</title>

    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .signup-box {
            width: 600px;
            margin: 30px auto;
            padding: 35px;
            background-color: #d3d3d3;
            border: 3px solid #333;
            text-align: center;
            box-sizing: border-box;
        }

        .signup-box h2 {
            margin-bottom: 30px;
        }

        .name-row {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin-bottom: 28px;
        }

        .name-field {
            width: 245px;
        }

        .field {
            margin-bottom: 25px;
        }

        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="password"],
        input[type="date"] {
            width: 235px;
            height: 28px;
            box-sizing: border-box;
        }

        .gender {
            margin: 10px 0 30px;
        }

        .terms {
            margin-bottom: 25px;
        }

        .buttons input {
            margin: 0 8px;
            padding: 3px 10px;
        }
    </style>
</head>

<body>

    <div class="signup-box">

        <h2>Sign Up Details</h2>

        <form>

            <div class="name-row">

                <div class="name-field">
                    <label>First Name :</label>
                    <input type="text" name="firstname">
                </div>

                <div class="name-field">
                    <label>Last Name :</label>
                    <input type="text" name="lastname">
                </div>

            </div>

            <div class="field">
                <label>Enter E-mail :</label>
                <input type="email" name="email">
            </div>

            <div class="field">
                <label>Enter Mobile Number :</label>
                <input type="tel" name="mobile">
            </div>

            <div class="field">
                <label>New Password :</label>
                <input type="password" name="password">
            </div>

            <div class="field">
                <label>Enter Birthdate :</label>
                <input type="date" name="birthdate">
            </div>

            <div class="gender">
                <input type="radio" name="gender" value="male">
                Male

                <input type="radio" name="gender" value="female">
                Female
            </div>

            <div class="terms">
                <input type="checkbox" name="terms">
                Agree for Terms & Conditions.....
            </div>

            <div class="buttons">
                <input type="submit" value="Sign Up">
                <input type="reset" value="clear">
            </div>

        </form>

    </div>

</body>
</html>
```
