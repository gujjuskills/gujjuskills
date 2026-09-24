# લેશન - ૧૧૪.૧ : કાસ્ટિંગ , સ્ટ્રિંગ ,બુલિયન - ૧

## What is Casting / Typecasting

**Casting / Typecasting** એટલે કોઈ એક data type ના value ને બીજા data type માં convert કરવાની પ્રક્રિયા.

Programming માં અલગ અલગ પ્રકારના data સાથે કામ કરતી વખતે Typecasting ઉપયોગી બને છે. ઉદાહરણ તરીકે, `String` માં રહેલા `"10"` ને `Integer` માં convert કરીને તેની સાથે mathematical operation કરી શકાય છે.

**Example:**


x = "10"
y = int(x)

print(y + 5)

## Types of Casting
### 1 – Implicit Type Conversion

Implicit Type Conversion એટલે programming language દ્વારા data type નું conversion આપમેળે થવું.

આ conversion programmer ને અલગથી કરવાની જરૂર પડતી નથી. સામાન્ય રીતે નાના અથવા સરળ data type ને મોટા data type માં convert કરવામાં આવે છે જેથી data loss ન થાય.

Example:

x = 10
y = 2.5

z = x + y

print(z)

Output:

12.5

### 2 – Explicit Type Conversion

Explicit Type Conversion એટલે programmer દ્વારા પોતાની જરૂરિયાત મુજબ એક data type ને બીજા data type માં manually convert કરવું.

આ માટે Python માં વિવિધ built-in functions નો ઉપયોગ થાય છે.

Function	Description
int()	Value ને Integer માં convert કરે છે.
float()	Value ને Float માં convert કરે છે.
str()	Value ને String માં convert કરે છે.
bool()	Value ને Boolean માં convert કરે છે.

Example:

x = "25"

y = int(x)

print(y + 5)

Output:

30

## Benefits of Typecasting

| Topic | Explanation |
|---|---|
| **Input Validation** | User પાસેથી મળતા input નો યોગ્ય data type નક્કી કરવામાં Typecasting મદદ કરે છે. ઉદાહરણ તરીકે, user દ્વારા આપવામાં આવેલ `"25"` input ને `int()` દ્વારા Integer માં convert કરી શકાય છે. |
| **Flexibility** | અલગ અલગ data types સાથે સરળતાથી કામ કરી શકાય છે અને જરૂરિયાત પ્રમાણે value ને યોગ્ય type માં convert કરી શકાય છે. |
| **Mathematical Operations** | String અથવા અન્ય data type માં રહેલી numeric value ને Integer અથવા Float માં convert કરીને addition, subtraction, multiplication અને division જેવી mathematical operations કરી શકાય છે. |
```
