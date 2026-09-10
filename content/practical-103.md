# પ્રેકટિકલ-૧૦૩ : સ્પ્રેડશીટમાં ડેશબોર્ડ બનાવો : MS-EXCEL

## 2. Excel માં આ Document બનાવવાના Steps

### Step 1: Excel ખોલો

Microsoft Excel ખોલો અને **Blank Workbook** પસંદ કરો.

### Step 2: Data Entry કરો

નવી Worksheet માં નીચેના Column Heading લખો:

`Date`, `Product`, `Salesperson`, `Region`, `Quantity`, `Unit Price`, `Total Sales`

ત્યારબાદ ઉપર આપેલા 30 દિવસના તમામ Data દાખલ કરો.

### Step 3: Total Sales ની Formula લગાવો

`Total Sales` Column માં પ્રથમ Data Row માટે નીચેની Formula લખો:

`=E2*F2`

ત્યારબાદ **Fill Handle** દ્વારા Formula ને નીચેની બધી Rows સુધી Copy કરો.

### Step 4: Data ને Excel Table બનાવો

સંપૂર્ણ Data Select કરો.

પછી:

`Insert → Table`

**My table has headers** પસંદ કરો અને **OK** કરો.

### Step 5: Table ને નામ આપો

Table Select કરીને:

`Table Design → Table Name`

માં નામ આપો:

`SalesData`

### Step 6: Pivot Table બનાવો

પહેલા Data Table Select કરો.

પછી:

`Insert → PivotTable`

**New Worksheet** પસંદ કરીને PivotTable બનાવો.

### Step 7: Product પ્રમાણે Sales જુઓ

PivotTable Fields માં:

`Rows → Product`  
`Values → Total Sales`

આથી દરેક Product નું કુલ વેચાણ મળશે.

### Step 8: Region પ્રમાણે Sales જુઓ

બીજું PivotTable બનાવો:

`Rows → Region`  
`Values → Total Sales`

આથી North, South, East અને West વિસ્તારનું વેચાણ જાણી શકાશે.

### Step 9: Salesperson પ્રમાણે Sales જુઓ

ત્રીજું PivotTable બનાવો:

`Rows → Salesperson`  
`Values → Total Sales`

આથી દરેક Salesperson નું કુલ વેચાણ મળશે.

### Step 10: Charts બનાવો

PivotTable Select કરીને:

`Insert → PivotChart`

વિવિધ Charts બનાવી શકો છો:

`Product Sales → Column Chart`  
`Region Sales → Pie Chart`  
`Salesperson Sales → Bar Chart`  
`Daily Sales → Line Chart`

### Step 11: Dashboard બનાવો

નવી Worksheet બનાવો અને તેનું નામ રાખો:

`Sales Dashboard`

Dashboard માં નીચેના ભાગો મૂકો:

`Total Sales`  
`Total Quantity`  
`Sales by Product`  
`Sales by Region`  
`Sales by Salesperson`  
`Daily Sales Trend`

### Step 12: KPI બનાવો

Dashboard ના ઉપરના ભાગમાં મોટા આંકડામાં નીચેના KPI દર્શાવો:

`Total Sales`  
`Total Quantity`  
`Average Sales`

**Total Sales** માટે:

`=SUM(SalesData[Total Sales])`

**Total Quantity** માટે:

`=SUM(SalesData[Quantity])`

**Average Sales** માટે:

`=AVERAGE(SalesData[Total Sales])`

### Step 13: Slicer ઉમેરો

PivotTable Select કરીને:

`PivotTable Analyze → Insert Slicer`

પછી નીચેના Fields પસંદ કરો:

`Product`  
`Salesperson`  
`Region`

હવે Dashboard માં Slicer દ્વારા Data ને સરળતાથી Filter કરી શકશો.

### Step 14: Dashboard ને Attractive બનાવો

છેલ્લે Dashboard માં નીચે પ્રમાણે ગોઠવણી કરો:

`Title → Sales Dashboard`  
`Charts → યોગ્ય જગ્યાએ ગોઠવો`  
`KPI Cards → ઉપર રાખો`  
`Slicers → બાજુમાં રાખો`

Sales માટે Number Format:

`₹#,##0`

લગાવો.

આ રીતે આપેલા 30 દિવસના Data પરથી સંપૂર્ણ **Sales Dashboard in Excel** તૈયાર થઈ જશે.
