# પ્રેકટિકલ-૧૬૬.૧ : PY : 7 - સાદું વ્યાજ ગણવાનું સાધન બનાવો

# Simple Interest Calculator
```
principal = float(input("Enter Principal Amount (₹): "))
rate = float(input("Enter Annual Interest Rate (%): "))
time = float(input("Enter Time (Years): "))

# Calculate Simple Interest
simple_interest = (principal * rate * time) / 100

# Calculate Total Amount
total_amount = principal + simple_interest

print("\n----- Simple Interest Calculator -----")
print(f"Principal Amount : ₹{principal:.2f}")
print(f"Interest Rate    : {rate:.1f}%")
print(f"Time             : {time:.1f} years")
print(f"Simple Interest  : ₹{simple_interest:.2f}")
print(f"Total Amount     : ₹{total_amount:.2f}")
```
### Output:
```
Enter Principal Amount (₹): 100
Enter Annual Interest Rate (%): 10
Enter Time (Years): 2

----- Simple Interest Calculator -----

Principal Amount : ₹100.00
Interest Rate    : 10.0%
Time             : 2.0 years
Simple Interest  : ₹20.00
Total Amount     : ₹120.00

```
