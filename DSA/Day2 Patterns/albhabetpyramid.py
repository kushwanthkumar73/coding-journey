n = int(input("Enter a Number: "))

for i in range(1, n+1):
    # spaces
    print(" " * (n-i), end="")

    # increasing letters
    for j in range(i):
        print(chr(65 + j), end="")

    # decreasing letters
    for j in range(i-2, -1, -1):
        print(chr(65 + j), end="")

    print()
