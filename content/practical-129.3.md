# પ્રેકટિકલ-૧૨૯.૩ : CSS-3 : ઇમેજ ગેલેરી બનાવવી

```html
<!DOCTYPE html>
<html>
<head>
    <title>Image Gallery</title>

    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
        }

        .gallery {
            width: 100%;
            border: 2px solid #000;
            padding: 10px;
            box-sizing: border-box;
        }

        .gallery h2 {
            margin: 0;
            padding: 10px;
            border-bottom: 2px solid #000;
        }

        .images {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            padding: 15px 5px;
            border-bottom: 2px solid #000;
            flex-wrap: wrap;
        }

        .images img {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border: 2px solid #333;
        }

        .images .big-image {
            width: 300px;
            height: 320px;
        }
    </style>
</head>

<body>

    <div class="gallery">

        <h2>Image Gallery</h2>

        <div class="images">

            <img src="image1.jpg" alt="Image 1">

            <img src="image2.jpg" alt="Image 2">

            <img src="image3.jpg" alt="Image 3">

            <img src="image4.jpg" alt="Image 4">

            <img src="image5.jpg" alt="Image 5">

            <img src="image6.jpg" alt="Image 6">

            <img src="image7.jpg" alt="Image 7">

        </div>

    </div>

</body>
</html>
```
