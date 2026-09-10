# પ્રેકટિકલ-૧૦૧ : ડેટા મૉડેલિંગ કરો : MS-EXCEL

## Document બનાવવાના Steps

### Step 1: નવું Database બનાવો

1. Database software ખોલો.
2. **Create New Database** વિકલ્પ પસંદ કરો.
3. Database નું નામ `Student Result Management System` આપો.
4. Database save કરો.

### Step 2: Students Table બનાવો

1. **Create Table** વિકલ્પ પસંદ કરો.
2. `Student ID`, `Student Name`, `Gender`, `Date of Birth` અને `Course` fields બનાવો.
3. `Student ID` ને **Primary Key** બનાવો.
4. Table નું નામ **Students** રાખો.
5. આપેલા 10 records દાખલ કરો.

### Step 3: Subjects Table બનાવો

1. નવી table બનાવો.
2. `Subject ID`, `Subject Name` અને `Maximum Marks` fields બનાવો.
3. `Subject ID` ને **Primary Key** બનાવો.
4. Table નું નામ **Subjects** રાખો.
5. આપેલા 10 records દાખલ કરો.

### Step 4: Marks Table બનાવો

1. નવી table બનાવો.
2. `Mark ID`, `Student ID`, `Subject ID` અને `Marks Obtained` fields બનાવો.
3. `Mark ID` ને **Primary Key** બનાવો.
4. Table નું નામ **Marks** રાખો.
5. આપેલા 10 records દાખલ કરો.

### Step 5: Relationship બનાવો

1. **Relationships** વિકલ્પ ખોલો.
2. `Students.Student ID` ને `Marks.Student ID` સાથે જોડો.
3. `Subjects.Subject ID` ને `Marks.Subject ID` સાથે જોડો.
4. Relationship save કરો.
5. Data Modelling નું કામ પૂર્ણ કરો.
