# પ્રેકટિકલ-૯૫ : ફોર્મ નિયંત્રણો કરો અને macro સાથે સરળ ડેટા એન્ટ્રી ફોર્મ બનાવો : MS-EXCEL

### Step 1: Excel Workbook તૈયાર કરો
Microsoft Excel ખોલો અને નવી Workbook બનાવો.

### Step 2: Table બનાવો
Worksheet માં નીચેના headings લખો:
Sr. No., Name, Age, Qualification અને Scholarship.

### Step 3: Data Enter કરો
આપેલા બધા records Table માં દાખલ કરો.

### Step 4: Form Controls તૈયાર કરો
Developer Tab માંથી Form Controls અથવા ActiveX Controls નો ઉપયોગ કરીને નીચેના controls બનાવો:
Name માટે TextBox
Age માટે Spin Button અથવા TextBox
Qualification માટે ComboBox
Scholarship માટે Option Button અથવા Check Box

### Step 5: UserForm બનાવો
VBA Editor ખોલવા માટે Alt + F11 દબાવો.
Insert માંથી UserForm પસંદ કરો.

### Step 6: UserForm પર Controls મૂકો
UserForm પર Name, Age, Qualification અને Scholarship માટે જરૂરી controls મૂકો.

### Step 7: Buttons બનાવો
UserForm પર નીચેના buttons બનાવો:
Add
Clear
Exit

### Step 8: Add Button માટે Macro બનાવો
Add Button પર click કરતાં UserForm માં દાખલ કરેલો data Worksheet ની Table ની નવી row માં ઉમેરાય તે માટે VBA Macro લખો.

### Step 9: Clear Button માટે Macro બનાવો
Clear Button પર click કરતાં Name, Age, Qualification અને Scholarship ના બધા input fields ખાલી થાય તે માટે Macro લખો.

### Step 10: Exit Button માટે Macro બનાવો
Exit Button પર click કરતાં UserForm બંધ થાય તે માટે Macro લખો.

### Step 11: Macro Test કરો
UserForm ખોલો અને Name, Age, Qualification તથા Scholarship ની માહિતી દાખલ કરો.
Add Button પર click કરો.
ચકાસો કે record Table માં નવી row તરીકે ઉમેરાયો છે.

### Step 12: Workbook Save કરો
Workbook ને Excel Macro Enabled Workbook એટલે કે `.xlsm` format માં Save કરો.
