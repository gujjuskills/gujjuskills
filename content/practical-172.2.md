# પ્રેકટિકલ-૧૭૨.૨ : PY : 20 - સંખ્યાની આગાહી કરવાની રમત

```
import random

print("----- Guess the Number Game -----")
print("I have chosen a number between 1 and 10.")

number = random.randint(1, 10)
attempts = 0

while True:
    guess = int(input("Enter your guess: "))
    attempts += 1

    if guess < number:
        print("Too Low! Try Again.")

    elif guess > number:
        print("Too High! Try Again.")

    else:
        print("\nCongratulations! You guessed the correct number.")
        print("The number was", number)
        print("You guessed it in", attempts, "attempts.")
        break

Output :
----- Guess the Number Game -----
I have chosen a number between 1 and 10.
Enter your guess: 5
Too Low! Try Again.

Enter your guess: 4
Too Low! Try Again.

Enter your guess: 6

Congratulations! You guessed the correct number.
The number was 6
You guessed it in 3 attempts.

```
