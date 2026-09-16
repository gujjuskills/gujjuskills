# લેશન - ૭૮ : CSS નો ખ્યાલ અને HTML નો ઉપયોગ

| વિષયો | માહિતી |
|---|---|
| **CSS નો ખ્યાલ (Concept of CSS)** | CSS એટલે **Cascading Style Sheets**. CSS નો ઉપયોગ HTML વેબપેજને સુંદર અને આકર્ષક બનાવવા માટે થાય છે. CSS દ્વારા વેબપેજના રંગ, ફોન્ટ, કદ, અંતર, બોર્ડર, બેકગ્રાઉન્ડ અને લેઆઉટ વગેરે બદલી શકાય છે. |
| **CSS નું Syntax** | CSS નું સામાન્ય Syntax: `selector { property: value; }` ઉદાહરણ: `p { color: blue; font-size: 18px; }` અહીં `p` selector, `color` અને `font-size` property તથા `blue` અને `18px` value છે. |
| **CSS નું ઉદાહરણ (Example of CSS)** | ```css\nh1 {\n  color: blue;\n  font-size: 30px;\n  text-align: center;\n}\n``` આ CSS દ્વારા Heading નો રંગ વાદળી, કદ 30px અને લખાણ મધ્યમાં કરવામાં આવે છે. |

| **HTMLમાં CSS લાગુ કરવાની રીત** | **માહિતી** |
|---|---|
| **1 – Inline Style** | Inline CSS સીધી HTML tag ના `style` attribute માં લખવામાં આવે છે. ઉદાહરણ: `<p style="color: red; font-size: 20px;">નમસ્તે</p>` આ પદ્ધતિનો ઉપયોગ કોઈ એક HTML element પર સીધી Style લાગુ કરવા માટે થાય છે. |
| **2 – Internal Style Sheet** | Internal CSS HTML ફાઇલના `<head>` વિભાગમાં `<style>` tag ની અંદર લખવામાં આવે છે. ઉદાહરણ: `<style> p { color: green; } </style>` તેનો ઉપયોગ એક જ HTML પેજમાં CSS લાગુ કરવા માટે થાય છે. |
| **3 – External Style Sheet** | External CSS અલગ `.css` ફાઇલમાં લખવામાં આવે છે અને HTML ફાઇલ સાથે જોડવામાં આવે છે. ઉદાહરણ: `<link rel="stylesheet" href="style.css">` આ પદ્ધતિથી એક જ CSS ફાઇલનો ઉપયોગ ઘણા HTML પેજ માટે કરી શકાય છે. |
