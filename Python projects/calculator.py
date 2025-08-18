num1 = input("Enter first number: ")
num2 = input("Enter second number: ")
num1 = float(num1)
num2 = float(num2)

operation = input("Choose opearation(+,-,*,/): ")

if operation == "+":
    print("Result ",(num1+num2))
elif operation == "-":
    print("Result ",(num1-num2))
elif operation == "*":
    print("Result ",(num1*num2))
elif operation == "/":
    if num2 != 0:
        print("Result ",(num1/num2))
    else:
        print("Error: Cannot divide by Zero")
else:
    print("Invalid Operator")