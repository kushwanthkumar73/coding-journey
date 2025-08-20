n = int(input("Enter a Number: "))
for rows in range(1,n+1):
    spaces = " "*(n-rows)
    star = "*"*(2*rows-1)
    print(spaces+star)