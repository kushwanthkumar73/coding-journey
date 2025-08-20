n = int(input("Enter number of rows: "))

for i in range(n):
    # spaces for alignment
    print(" " * (n - i), end="")

    num = 1
    for j in range(i+1):
        print(num, end=" ")
        num = num * (i - j) // (j + 1)   # formula to compute next value
    print()
