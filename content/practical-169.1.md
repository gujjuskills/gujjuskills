# પ્રેકટિકલ-૧૬૯.૧ : PY : 13 - સ્ટ્રિંગમાં સ્વરોની ગણતરી કરો

```
# Count the Vowels in String

string = input("Enter a string: ")

vowels = "aeiouAEIOU"
count = 0

for ch in string:
    if ch in vowels:
        count += 1

print("\n----- Vowel Counter -----")
print("String:", string)
print("\nNumber of Vowels:", count)

Output :
Enter a string: Industrial Training Institute

----- Vowel Counter -----
String: Industrial Training Institute

Number of Vowels: 11

```
