# લેશન - ૧૨૨ : પાયથોન મોડ્યુલ્સ , ઈનપુટ અને આઉટપુટ

### 1. Output in Python : print()

વિષય: print() Function

print() નો ઉપયોગ Python માં કોઈપણ માહિતી, શબ્દ, સંખ્યા, variable અથવા calculation નું પરિણામ screen પર દર્શાવવા માટે થાય છે.

Example:
```
print("Hello World")
print("Welcome to Python")
print(10)
print(10 + 20)

Output:

Hello World
Welcome to Python
10
30
```
સમજૂતી:

print() Python નું built in function છે. તેની મદદથી આપણે program નું output screen પર જોઈ શકીએ છીએ. print() માં text લખવા માટે double quotes " " અથવા single quotes ' ' નો ઉપયોગ કરી શકાય છે.

### 2. Input in Python : input()

વિષય: input() Function

input() નો ઉપયોગ user પાસેથી keyboard દ્વારા માહિતી મેળવવા માટે થાય છે. User દ્વારા આપવામાં આવેલી માહિતી સામાન્ય રીતે string તરીકે મળે છે.

Example:
```
name = input("Enter your name: ")
print("Hello", name)

Sample Input:

Enter your name: Saiyam

Output:

Hello Saiyam

Number Input Example:

age = int(input("Enter your age: "))
print("Your age is", age)

Sample Input:

Enter your age: 25

Output:

Your age is 25
```
સમજૂતી:

input() દ્વારા મળેલી value default રીતે string હોય છે. જો user પાસેથી integer value લેવી હોય તો int() નો ઉપયોગ કરવો પડે છે.
