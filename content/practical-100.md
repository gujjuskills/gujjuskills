# પ્રેકટિકલ-૧૦૦ : પાવર ક્વેરી , પાવર ક્વેરી ફંક્શન બનાવો : MS-EXCEL

## 📝 Power Query બનાવવાના Steps

### ભાગ 1: Excel માં Data તૈયાર કરો

1. Excel માં **FirstName, MiddleName અને LastName** નો data દાખલ કરો.
2. આખો data select કરો.
3. **Ctrl + T** દબાવીને Table બનાવો.
4. **My table has headers** વિકલ્પ પસંદ કરો.
5. **Data → From Table/Range** પર ક્લિક કરો.
6. હવે **Power Query Editor** ખુલશે.

### ભાગ 2: Concatenate કરીને Full Name બનાવો

7. Power Query માં **Add Column** tab પસંદ કરો.
8. **Custom Column** પર ક્લિક કરો.
9. Column Name માં `Full name` લખો.
10. Formula માં નીચેનું formula લખો:

```powerquery
[LastName] & " " & [FirstName] & " " & [MiddleName]
KALASVA ARUNABEN DAYABHAI

ભાગ 3: Text to Columns કરો

13. `Full name` column select કરો.
14. **Transform → Split Column → By Delimiter** પસંદ કરો.
15. Delimiter તરીકે **Space** પસંદ કરો.
16. **Each occurrence of the delimiter** વિકલ્પ પસંદ કરો.
17. **OK** પર ક્લિક કરો.
18. હવે Full name ત્રણ અલગ columns માં split થશે.

| Column 1 | Column 2 | Column 3 |
|---|---|---|
| KALASVA | ARUNABEN | DAYABHAI |
| TABIYAD | VIMALABEN | VIRUBHAI |
| DAMOR | KUNJALBEN | CHUNILAL |

19. હવે columns ના નામ બદલો:

| જૂનું નામ | નવું નામ |
|---|---|
| Column 1 | LastName |
| Column 2 | FirstName |
| Column 3 | MiddleName |

20. Columns ને **FirstName → MiddleName → LastName** ક્રમમાં ગોઠવો.

ભાગ 4: Excel માં પાછું Load કરો

21. Power Query Editor માં **Home → Close & Load** પસંદ કરો.
22. હવે Final data Excel worksheet માં Load થશે.

### 🔑 Exercise નો મુખ્ય Concept

**Concatenate → Full Name બનાવવું → Text to Columns → Data ને ફરી અલગ Columns માં વહેંચવું**
