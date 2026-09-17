# પ્રેકટિકલ-૧૨૮.૧૩ : HTML-13 : iframe ટેગનો ઉપયોગ

## Main HTML Code

```html
<!DOCTYPE html>
<html>
<head>
    <title>Use of iframe Tag</title>
</head>

<body>

    <h3>Use of iframe Tag</h3>

    <p>My First Program</p>

    <iframe src="first.html"
            width="700"
            height="220"
            title="My First Program">
    </iframe>

    <p>My Second Program</p>

    <iframe src="home1.html"
            width="700"
            height="300"
            title="Home Page 1">
    </iframe>

    <iframe src="home2.html"
            width="700"
            height="250"
            title="Home Page 2">
    </iframe>

</body>
</html>
```

## first.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Program</title>
</head>

<body>

    <p>What u do ?</p>

    <h1>YuvaExperts</h1>

    <h2>Computer Operator</h2>

</body>
</html>
```

## home1.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Home Page - 1</title>
</head>

<body>

    <center>

        <h2>Home page - 1</h2>

        <h3>Showing images from Folder</h3>

        <p>
            <a href="home2.html">Click To Go Home Page - 2</a>
        </p>

        <img src="image1.jpg"
             width="150"
             height="150"
             alt="Image 1">

        <img src="image2.jpg"
             width="150"
             height="150"
             alt="Image 2">

    </center>

</body>
</html>
```

## home2.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Home Page - 2</title>
</head>

<body>

    <center>

        <h2>Home page - 2</h2>

        <h3>Showing Link Images to go that website</h3>

        <p>
            <a href="home1.html">Back To Home Page - 1</a>
        </p>

        <a href="https://www.google.com" target="_blank">
            <img src="image1.jpg"
                 width="150"
                 height="100"
                 alt="Google">
        </a>

        <a href="https://www.youtube.com" target="_blank">
            <img src="image2.jpg"
                 width="150"
                 height="100"
                 alt="YouTube">
        </a>

    </center>

</body>
</html>
```
