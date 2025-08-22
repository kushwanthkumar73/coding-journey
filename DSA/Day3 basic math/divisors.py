n = int(input("Enter a number: "))

# Step 1: create empty list to store divisors
divisors = []

# Step 2: check every number from 1 to n
for i in range(1, n + 1):
    if n % i == 0:       # if i divides n completely
        divisors.append(i)   # add i to list

# Step 3: print the list of divisors
print("Divisors of", n, "are:", divisors)
