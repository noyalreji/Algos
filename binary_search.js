from random import randint
from datetime import datetime
from math import floor

# binary search function:
def binary_search(input, value):
    midpoint = floor(len(input) / 2)
    if input[midpoint] == value:
        return True
    if len(input) <= 1:
        return False
    elif input[midpoint] > value:
        return binary_search(input[0:(midpoint)], value)
    else:
        return binary_search(input[(midpoint):len(input)], value)

# linear search function:

def linear_search(input, value):
    for x in input:
        if x == value:
            return True
    return False

# testing shows the binary search I wrote Is Not Good; did some research and wrote this instead
# why is the search I wrote Not Good?

def better_binary_search(input, left, right, value): 
    if right >= left: 
        # mid = floor(left + (right - left)/2)
        # uhhh I don't remember why this is here
        # we could do // for flooring division in py3
        mid = floor((left + right)/2)
        if input[mid] == value: 
            return True 
        elif input[mid] > value: 
            return better_binary_search(input, left, mid-1, value) 
        else: 
            return better_binary_search(input, mid+1, right, value) 
    else: 
        return False


# generate list quickly

def genlist(minimum, maximum):
    sample = list(range(minimum, maximum))
    return sample

minimum = 0
maximum = 1000000000
# don't make this number bigger than ~100 million, you run into memory issues on some machines
# 1 billion is okay on machines with 64GB of RAM
search_list = genlist(minimum, maximum)

for x in range(0, 100):
    value = randint(minimum - 500000000, maximum + 500000000) #500000000
    start = datetime.now()
    b_result = binary_search(search_list, value)
    end = datetime.now()
    print(f"Ryan's original binary search returned {b_result} for {value} in {end - start}")
    start = datetime.now()
    s_result = linear_search(search_list, value)
    end = datetime.now()
    print(f"Simple search returned {s_result} for {value} in {end - start}")
    start = datetime.now()
    b_result = better_binary_search(search_list, 0, len(search_list) - 1, value)
    end = datetime.now()
    print(f"Better binary search returned {b_result} for {value} in {end - start}")
    
    if b_result != s_result:
        print(f"!!! result mismatch for {value}")

# # print(better_binary_search([1, 2, 3, 4, 5], 0, 4, 99))
# print(binary_search([1, 2, 3, 4, 5], 9))
