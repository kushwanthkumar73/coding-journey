n = int(input("Enter a Number: "))

for rows in range(1,n+1):
    spaces = " "*(rows-1)
    stars = "*"*(2*(n-rows)+1)
    print(spaces+stars)