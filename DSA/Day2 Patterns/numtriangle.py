n = int(input("Enter a Number:"))

for rows in range(1,n+1):
    for col in range(1,rows+1):
        print(col,end=" ")
    print()