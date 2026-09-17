# પ્રેકટિકલ-૧૨૯.૧ : CSS-1 : CSS નો ઉપયોગ કરી પ્રોગ્રામ બનાવો

### CSS Code with Tag

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Simple CSS Program</title>

    <style>
        div {
            width: 780px;
            height: 350px;
            background-color: lightgray;
            margin: auto;
        }

        p {
            text-align: center;
            font-size: 20px;
            padding-top: 20px;
        }

        h1 {
            text-align: right;
            font-size: 45px;
            margin-right: 30px;
        }

        h2 {
            font-size: 40px;
            margin-left: 20px;
        }
    </style>
</head>

<body>

    <div>
        <p>What u do ?</p>

        <h1>YuvaExperts</h1>

        <h2>COmputer Operator</h2>
    </div>

</body>
</html>
```

### CSS Code with Class

```html

<!DOCTYPE html>
<html>
<head>
    <title>Simple CSS Program</title>

    <style>
        .box {
            width: 780px;
            height: 350px;
            background-color: lightgray;
            margin: auto;
        }

        .question {
            text-align: center;
            font-size: 20px;
            padding-top: 20px;
        }

        .title {
            text-align: right;
            font-size: 45px;
            font-weight: bold;
            margin-right: 30px;
        }

        .job {
            font-size: 40px;
            font-weight: bold;
            margin-left: 20px;
        }
    </style>
</head>

<body>

    <div class="box">

        <p class="question">What u do ?</p>

        <h1 class="title">YuvaExperts</h1>

        <h2 class="job">COmputer Operator</h2>

    </div>

</body>
</html>
``` 
