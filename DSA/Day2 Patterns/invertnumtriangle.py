n = int(input("Enter a Number: "))

for rows in range(1,n+1):
    for col in range(1,(n-rows)+2):
        print(col,end=" ")
    print()