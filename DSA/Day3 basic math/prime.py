n = int(input("Enter a number: "))

# Step 1: handle numbers less than 2
if n < 2:
    print("False")  # 0 and 1 are not prime
else:
    is_prime = True  # assume number is prime

    # Step 2: check divisibility from 2 to n-1
    for i in range(2, n):
        if n % i == 0:
            is_prime = False  # found a divisor, not prime
            break  # no need to check further

    # Step 3: print result
    if is_prime:
        print("True")   # number is prime
    else:
        print("False")  # number is not prime
