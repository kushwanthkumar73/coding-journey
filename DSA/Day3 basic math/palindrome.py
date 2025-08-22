n = int(input("Enter a Number: "))

# Step 1: store the original number
original = n

# Step 2: handle negative numbers
if n < 0:
    print("False")   # negative numbers are not palindrome
else:
    reversed_num = 0

    # Step 3: reverse the number using a loop
    while n > 0:
        digit = n % 10            # get last digit
        reversed_num = reversed_num * 10 + digit   # build reversed number
        n = n // 10               # remove last digit

    # Step 4: check if original and reversed are same
    if original == reversed_num:
        print("True")   # palindrome
    else:
        print("False")  # not palindrome
