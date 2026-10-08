# પ્રેકટિકલ-૧૬૪.૨ : PY : 4 - ડોલર થી રૂપિયામાં ચલણ રૂપાંતરિત કરો

``` 
# Enter amount in US Dollars

usd = float(input("Enter amount in US Dollars (USD): "))

# Enter current exchange rate

rate = float(input("Enter current USD to INR exchange rate: "))

# Convert USD to INR

rupees = usd * rate

# Display result

print("\n Currency Converter")

print(f"US Dollars (USD) : $ {usd:.2f}")

print(f"Exchange Rate     : {rate:.2f}")

print(f"Indian Rupees     : ₹ {rupees:.2f}")

# Output

Enter amount in US Dollars (USD): 100

Enter current USD to INR exchange rate: 86.25

Currency Converter

US Dollars (USD) : $ 100.00

Exchange Rate     : 86.25

Indian Rupees     : ₹ 8625.00
```
