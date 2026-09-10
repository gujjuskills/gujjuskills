# પ્રેકટિકલ-૯૪ : સરળ macro બનાવો અને ફેરફાર કરો : MS-EXCEL 

## Document બનાવવાના Steps

### Step 1: Table બનાવો

1. spreadsheet application ખોલો.
2. નવી file બનાવો.
3. એક નવું  table બનાવો.
4. નીચેના fields બનાવો.

## Field Name 
 Name 
 
 Gender 
 
 City 
 
 Age 
 
 Mobile 
 
### Step 2: Records દાખલ કરો

Table માં નીચેની માહિતી દાખલ કરો.

| Name | Gender | City | Age | Mobile |
|---|---|---|---:|---:|
| Munjal | Male | Bayad | 35 | 99243100041 |
| Nilam | Female | Modasa | 32 | 9632585236 |
| Ravi | Male | Jamnagar | 36 | 9632352325 |
| Sachin | Male | Modasa | 25 | 9632363636 |
| Sanjay | Male | Meghraj | 28 | 9658565856 |

### Step 3: Simple Form બનાવો

1. Table પસંદ કરો.
2. **Form Wizard** અથવા Form creation option પસંદ કરો.
3. `Name`, `Gender`, `City`, `Age` અને `Mobile` fields form માં ઉમેરો.
4. Form માટે યોગ્ય layout પસંદ કરો.
5. Form ને save કરો.

### Step 4: Save Data Button બનાવો

1. Form ને **Design Mode** માં ખોલો.
2. એક **Button** ઉમેરો.
3. Button નું નામ **Save Data** રાખો.
4. Button ના click event માટે macro બનાવો અથવા assign કરો.
5. Macro નો ઉપયોગ form માં ભરેલી માહિતી table માં નવી record તરીકે ઉમેરવા માટે કરો.

### Step 5: Macro બનાવો

Macro માં નીચેની પ્રક્રિયા કરો.

1. Form માંથી **Name** મેળવો.
2. Form માંથી **Gender** મેળવો.
3. Form માંથી **City** મેળવો.
4. Form માંથી **Age** મેળવો.
5. Form માંથી **Mobile** મેળવો.
6. Table માં નવી record બનાવો.
7. મેળવેલી બધી માહિતી નવી record માં દાખલ કરો.
8. Record ને save કરો.
9. જરૂરી હોય તો form ના fields ખાલી કરો.

### Step 6: Button સાથે Macro જોડો

1. **Save Data** button પસંદ કરો.
2. Button ના **Click Event** માં બનાવેલો macro assign કરો.
3. Form save કરો.
4. Form ને સામાન્ય mode માં ખોલો.

### Step 7: Data દાખલ કરીને Test કરો

Form માં નીચેની માહિતી દાખલ કરો.

| Field | Data |
|---|---|
| Name | Sanjay |
| Gender | Male |
| City | Meghraj |
| Age | 28 |
| Mobile | 9658565856 |

1. **Save Data** button પર click કરો.
2. Table ખોલો.
3. નવી record ઉમેરાઈ છે કે નહીં તે તપાસો.
4. જો record સફળતાપૂર્વક ઉમેરાય તો macro યોગ્ય રીતે કાર્ય કરે છે.
