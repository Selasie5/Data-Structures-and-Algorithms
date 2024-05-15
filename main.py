
def binary_search(haystack, needle):
    haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    low_value = 0
    high_value = len(haystack)

    while low_value < high_value:
        mid_point = int((low_value + high_value)/2)
        needle = haystack[mid_point]
        if needle == mid_point:
            return True
        elif needle < mid_point:
            high_value = mid_point - 1
        else:
            low_value = mid_point + 1
    return False
