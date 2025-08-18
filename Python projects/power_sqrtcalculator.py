n = float(input("Enter a Number: "))

sqrt=(n**0.5)
print("Square Root: "+str(sqrt))
sq =(n**2)
print("Square: "+str(sq))
cube = (n**3)
print("Cube: "+str(cube))
power = float(input("Enter power: "))
result = sqrt + sq + cube
final_result = result ** power
print("Result: "+str(final_result))
