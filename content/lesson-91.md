# લેશન - ૯૧ : જાવાસ્ક્રિપ્ટમાં ડોક્યુમેન્ટ ઓબ્જેક્ટનો પરિચય

## Document Object Model (DOM) શું છે :

| મુદ્દો | માહિતી |
|---|---|
| DOM | Document Object Model ને DOM કહેવામાં આવે છે. |
| અર્થ | DOM એ HTML અથવા XML document ને objects ના tree structure માં રજૂ કરે છે. |
| ઉપયોગ | JavaScript દ્વારા વેબપેજના HTML elements, attributes અને content ને access અને modify કરવા માટે DOM નો ઉપયોગ થાય છે. |
| Document | આખું HTML document `document` object દ્વારા દર્શાવવામાં આવે છે. |
| Element | HTML ના દરેક tag ને DOM માં એક element તરીકે રજૂ કરવામાં આવે છે. |
| Example | `document.getElementById("demo")` દ્વારા HTML element ને access કરી શકાય છે. |


## DOM Properties :

| ક્રમ | DOM Property | ઉપયોગ |
|---|---|---|
| 1 | `innerHTML` | Elementની અંદરનું HTML content મેળવવા અથવા બદલવા માટે. |
| 2 | `innerText` | Elementની અંદરનું text મેળવવા અથવા બદલવા માટે. |
| 3 | `textContent` | Elementનું text content મેળવવા અથવા બદલવા માટે. |
| 4 | `value` | Form field ની value મેળવવા અથવા બદલવા માટે. |
| 5 | `id` | Elementનું ID મેળવવા અથવા બદલવા માટે. |
| 6 | `className` | Elementનું class name મેળવવા અથવા બદલવા માટે. |
| 7 | `style` | Elementની CSS style બદલવા માટે. |
| 8 | `title` | Elementનું title attribute મેળવવા અથવા બદલવા માટે. |


## DOM Methods :

| ક્રમ | DOM Method | ઉપયોગ |
|---|---|---|
| 1 | `getElementById()` | ID દ્વારા HTML element શોધવા માટે. |
| 2 | `getElementsByClassName()` | Class name દ્વારા elements શોધવા માટે. |
| 3 | `getElementsByTagName()` | Tag name દ્વારા elements શોધવા માટે. |
| 4 | `querySelector()` | CSS selector દ્વારા પ્રથમ matching element મેળવવા માટે. |
| 5 | `querySelectorAll()` | CSS selector દ્વારા બધા matching elements મેળવવા માટે. |
| 6 | `createElement()` | નવું HTML element બનાવવા માટે. |
| 7 | `appendChild()` | Parent elementમાં child element ઉમેરવા માટે. |
| 8 | `removeChild()` | Child element દૂર કરવા માટે. |


## Field Value ને DOM દ્વારા Access કરવું :

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>

<input type="text" id="name" value="GujjuSkills">

<script>
    let x = document.getElementById("name").value;
    document.write(x);
</script>

</body>
</html>
