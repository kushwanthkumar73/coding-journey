n = int(input("Enter a number: "))

# Step 1: store original number
original = n

# Step 2: find number of digits
num_digits = len(str(n))

# Step 3: calculate sum of digits raised to power of num_digits
sum_of_powers = 0
temp = n
while temp > 0:
    digit = temp % 10                  # get last digit
    sum_of_powers += digit ** num_digits   # raise to power and add
    temp = temp // 10                   # remove last digit

# Step 4: check if sum_of_powers equals original number
if sum_of_powers == original:
    print("True")   # Armstrong number
else:
    print("False")  # Not an Armstrong number
