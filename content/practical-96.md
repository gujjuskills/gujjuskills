# પ્રેકટિકલ-૯૬ : lookup ફંક્શનનો ઉપયોગ કરીને ડેટા શોધો : MS-EXCEL

## 1. Student Data દાખલ કરવું

Excel માં નીચેના headings દાખલ કરો અને ડેટ નાખો.  

**| Name | English | Hindi | Gujarati | Sanskrit | Total |**

## 2. Total કાઢવું

F2 Cell માં નીચેનું Formula લખો:

=SUM(B2:E2)

Enter દબાવો.

ત્યારબાદ F2 ના Formula ને F11 સુધી Fill Down કરો.

આ Formula દરેક વિદ્યાર્થીના English, Hindi, Gujarati અને Sanskrit ના marks નો Total કરશે.

ઉદાહરણ:


Munjal = 86 + 82 + 78 + 95 = 341


## 3. VLOOKUP Table બનાવવું

Student Name અને Total શોધવા માટે અલગ table બનાવો.

| VLOOKUP |       |
| ------- | ----: |
| Name    | Total |
| Munjal  |   341 |

Name માટે `Munjal` દાખલ કરો.

Total માટે Formula:


=VLOOKUP(H3,A2:F11,6,FALSE)


આ Formula `A2:F11` માં Munjal ને શોધશે અને તેની 6th column એટલે કે Total બતાવશે.

Result:


341


## 4. HLOOKUP માટે Data તૈયાર કરવું

HLOOKUP માટે data horizontal format માં બનાવો.

|       | English | Hindi | Gujarati | Sanskrit |
| ----- | ------: | ----: | -------: | -------: |
| Marks |      45 |    55 |       55 |       56 |

## 5. HLOOKUP Formula

English ના marks શોધવા માટે Formula લખો:


=HLOOKUP("English",H2:L3,2,FALSE)


આ Formula `English` ને first row માં શોધશે અને બીજી row માંથી તેનું value આપશે.

Result:


45


## 6. VLOOKUP નું પરિણામ

| Name   | Total |
| ------ | ----: |
| Munjal |   341 |

## 7. HLOOKUP નું પરિણામ

| Subject | Marks |
| ------- | ----: |
| English |    45 |

## 8. Table Formatting

Excel માં Student Data select કરો.

1. Home → Borders → All Borders પસંદ કરો.
2. Header row ને Bold કરો.
3. Header row માં Background Colour આપો.
4. બધા marks ને Center Align કરો.
5. Total column ને Center Align કરો.
6. Column Width યોગ્ય પ્રમાણે વધારો.
7. VLOOKUP અને HLOOKUP tables ને અલગથી format કરો.

## 09. ઉપયોગમાં લેવાતા મુખ્ય Formulas

### SUM Function


=SUM(B2:E2)


### VLOOKUP Function

=VLOOKUP(H3,A2:F11,6,FALSE)


### HLOOKUP Function


=HLOOKUP("English",H2:L3,2,FALSE)


## Final Results

| Function | Search Value    | Result |
| -------- | --------------- | -----: |
| VLOOKUP  | Munjal → Total  |    341 |
| HLOOKUP  | English → Marks |     45 |

