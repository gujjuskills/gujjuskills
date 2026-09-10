# પ્રેકટિકલ-૧૦૨ : સરળ ડેટા visualization માટે પાવર BI નો ઉપયોગ કરો : MS-EXCEL

## 📝 દસ્તાવેજ બનાવવાના સ્ટેપ્સ

### 1. Excel માં Data Enter કરો

Excel ખોલો અને નીચેના headings બનાવો:

**Sr No, Date, Salesman, Region, Item, Qty, Price, Amount**

ત્યારબાદ આપેલ 16 rows નો data Excel માં દાખલ કરો.

### 2. Amount ની ગણતરી કરો

`Amount` column માં **Qty × Price** ની ગણતરી કરો.

ઉદાહરણ:

```excel
=F2*G2

ત્યારબાદ formula ને બધી rows સુધી copy કરો.

3. Data ને Table બનાવો
સંપૂર્ણ data select કરો.
Insert → Table પર ક્લિક કરો.
My table has headers પસંદ કરો.
OK પર ક્લિક કરો.
4. Power BI માં Data Import કરો
Power BI Desktop ખોલો.
Get Data → Excel પસંદ કરો.
તમારી Excel file પસંદ કરો.
Data table પસંદ કરો.
Load પર ક્લિક કરો.
5. Dashboard માટે Visuals બનાવો
Region પ્રમાણે Amount માટે Column Chart બનાવો.
Item પ્રમાણે Amount માટે Bar Chart બનાવો.
Salesman પ્રમાણે Sales માટે Chart બનાવો.
Date પ્રમાણે Amount માટે Line Chart બનાવો.
Total Sales માટે Card બનાવો.
Total Quantity માટે Card બનાવો.
6. Filters / Slicers ઉમેરો

Dashboard ને Interactive બનાવવા માટે:

Insert → Slicer

અને તેમાં નીચેના Fields માંથી જરૂરી Field ઉમેરો:

Region
Item
Date
7. Dashboard Format કરો
Charts ના Titles યોગ્ય રીતે આપો.
Font Size જરૂરિયાત મુજબ ગોઠવો.
બધા Visuals ને યોગ્ય રીતે Align કરો.
Dashboard ને સરળ અને આકર્ષક બનાવો.

Dashboard નું મુખ્ય Title રાખી શકો:

Simple Sales Dashboard

8. Dashboard Save કરો

Power BI file ને .pbix format માં Save કરો.

File → Save As → Simple Sales Dashboard.pbix

