# પ્રેકટિકલ-૧૨૯.૪ : CSS-4 : આકર્ષક ટેબલ બનાવવું

## HTML Code

```html
<!DOCTYPE html>
<html>
<head>
    <title>Computer Shop</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <h1>Computer Shop</h1>

    <table>
        <tr>
            <th>NO.</th>
            <th>Computer Parts</th>
            <th>Price</th>
        </tr>

        <tr>
            <td>1</td>
            <td>Monitor</td>
            <td>9500</td>
        </tr>

        <tr>
            <td>2</td>
            <td>Keyboard</td>
            <td>1000</td>
        </tr>

        <tr>
            <td>3</td>
            <td>Mouse</td>
            <td>300</td>
        </tr>

        <tr>
            <td>4</td>
            <td>Speaker</td>
            <td>400</td>
        </tr>

        <tr>
            <td>5</td>
            <td>Headphone</td>
            <td>250</td>
        </tr>

        <tr>
            <td>6</td>
            <td>Router</td>
            <td>600</td>
        </tr>

        <tr>
            <td>7</td>
            <td>Pendrive</td>
            <td>900</td>
        </tr>

        <tr>
            <td>8</td>
            <td>Printer</td>
            <td>7000</td>
        </tr>
    </table>

</body>
</html>
```

## CSS Code

```css
body {
    font-family: Arial, sans-serif;
    margin: 30px;
}

h1 {
    text-align: left;
}

table {
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
}

th {
    background-color: #111;
    color: white;
    padding: 12px;
    text-align: left;
}

td {
    padding: 10px;
    border: 1px solid #333;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:nth-child(odd) {
    background-color: #bdbdbd;
}

tr:hover {
    background-color: #ddd;
}
```
