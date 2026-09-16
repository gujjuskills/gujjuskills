# લેશન - ૮૫ : જાવાસ્ક્રિપ્ટ પ્રોગ્રામ કંટ્રોલ સ્ટેટમેન્ટ અને લૂપ

# JS – Program Control Statements & Loop

### પ્રોગ્રામ કંટ્રોલ સ્ટેટમેન્ટ્સ :

<table>
<tr>
<td colspan="2"><b>1 - If... else</b></td>
</tr>
<tr>
<td><b>Use</b></td>
<td>શરત સાચી હોય ત્યારે એક કોડ અને શરત ખોટી હોય ત્યારે બીજો કોડ ચલાવવા માટે ઉપયોગ થાય છે.</td>
</tr>
<tr>
<td><b>Syntax</b></td>
<td><code>if (condition) { } else { }</code></td>
</tr>
<tr>
<td><b>Example</b></td>
<td><code>let age = 18;<br>if (age &gt;= 18) {<br>console.log("પુખ્ત");<br>} else {<br>console.log("અપુખ્ત");<br>}</code></td>
</tr>

<tr>
<td colspan="2"><b>2 - switch case</b></td>
</tr>
<tr>
<td><b>Use</b></td>
<td>એક expression ની અલગ અલગ values મુજબ અલગ અલગ કોડ ચલાવવા માટે ઉપયોગ થાય છે.</td>
</tr>
<tr>
<td><b>Syntax</b></td>
<td><code>switch (expression) {<br>case value:<br>statement;<br>break;<br>default:<br>statement;<br>}</code></td>
</tr>
<tr>
<td><b>Example</b></td>
<td><code>let day = 1;<br>switch (day) {<br>case 1:<br>console.log("સોમવાર");<br>break;<br>default:<br>console.log("અમાન્ય દિવસ");<br>}</code></td>
</tr>

<tr>
<td colspan="2"><b>3 - do while loop</b></td>
</tr>
<tr>
<td><b>Use</b></td>
<td>કોડને ઓછામાં ઓછો એક વખત ચલાવીને ત્યારબાદ શરત ચકાસવા માટે ઉપયોગ થાય છે.</td>
</tr>
<tr>
<td><b>Syntax</b></td>
<td><code>do {<br>statement;<br>} while (condition);</code></td>
</tr>
<tr>
<td><b>Example</b></td>
<td><code>let i = 1;<br>do {<br>console.log(i);<br>i++;<br>} while (i &lt;= 5);</code></td>
</tr>

<tr>
<td colspan="2"><b>4 - while loop</b></td>
</tr>
<tr>
<td><b>Use</b></td>
<td>જ્યાં સુધી આપેલી શરત સાચી હોય ત્યાં સુધી કોડને વારંવાર ચલાવવા માટે ઉપયોગ થાય છે.</td>
</tr>
<tr>
<td><b>Syntax</b></td>
<td><code>while (condition) {<br>statement;<br>}</code></td>
</tr>
<tr>
<td><b>Example</b></td>
<td><code>let i = 1;<br>while (i &lt;= 5) {<br>console.log(i);<br>i++;<br>}</code></td>
</tr>

<tr>
<td colspan="2"><b>5 - for loop</b></td>
</tr>
<tr>
<td><b>Use</b></td>
<td>કોડના બ્લોકને ચોક્કસ સંખ્યામાં વારંવાર ચલાવવા માટે ઉપયોગ થાય છે.</td>
</tr>
<tr>
<td><b>Syntax</b></td>
<td><code>for (initialization; condition; increment/decrement) {<br>statement;<br>}</code></td>
</tr>
<tr>
<td><b>Example</b></td>
<td><code>for (let i = 1; i &lt;= 5; i++) {<br>console.log(i);<br>}</code></td>
</tr>
</table>
