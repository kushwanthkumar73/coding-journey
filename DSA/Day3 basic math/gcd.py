n1 = int(input("Enter first number: "))
n2 = int(input("Enter second number: "))

# Step 1: start with the smaller number
if n1 < n2:
    small = n1
else:
    small = n2

gcd = small

# Step 2: keep checking until we find a divisor of both numbers
while n1 % gcd != 0 or n2 % gcd != 0:
    gcd = gcd - 1   # decrease gcd by 1

print("GCD is:", gcd)
