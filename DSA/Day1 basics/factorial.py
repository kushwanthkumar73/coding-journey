def factorial(num):
    product=1
    for i in range(1,num+1):
        product=product*i 
    return product 


n = int(input("Enter a Number: "))
print(factorial(n))

