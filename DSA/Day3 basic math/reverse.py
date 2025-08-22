def reverse_integer(n):
    if n < 0:  # if number is negative
        return -int(str(-n)[::-1])  # make it positive, reverse, then put minus back
    else:
        return int(str(n)[::-1])  # just reverse directly

# Examples
print(reverse_integer(1234))   # 4321
print(reverse_integer(-987))   # -789
