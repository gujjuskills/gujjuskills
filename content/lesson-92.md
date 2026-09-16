# લેશન - ૯૨ : જાવાસ્ક્રિપ્ટમાં એનિમેશન અને મલ્ટીમીડિયા ફાઇલ્સનો પરિચય

### JavaScript Animation :

JavaScript Animation એટલે JavaScript ની મદદથી વેબ પેજના HTML Elements ની સ્થિતિ, કદ, રંગ, દૃશ્યતા વગેરેમાં સમય પ્રમાણે ફેરફાર કરીને એનિમેશન બનાવવાની પ્રક્રિયા.

### JavaScript Animation Functions :

| Function | ઉપયોગ |
|---|---|
| `setInterval()` | નક્કી કરેલા સમયાંતરે JavaScript Function ને વારંવાર ચલાવવા માટે ઉપયોગ થાય છે. |
| `setTimeout()` | નક્કી કરેલા સમય પછી JavaScript Function ને એક વખત ચલાવવા માટે ઉપયોગ થાય છે. |
| `clearInterval()` | `setInterval()` દ્વારા શરૂ કરાયેલ Timer ને બંધ કરવા માટે ઉપયોગ થાય છે. |
| `clearTimeout()` | `setTimeout()` દ્વારા શરૂ કરાયેલ Timer ને રદ કરવા માટે ઉપયોગ થાય છે. |

### Syntax :

```javascript
setInterval(function(), milliseconds);

<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Animation</title>
</head>
<body>

<div id="box">Animation</div>

<script>
let position = 0;

setInterval(function() {
    position += 10;
    document.getElementById("box").style.marginLeft = position + "px";
}, 100);
</script>

</body>
</html>
