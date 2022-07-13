from glob import glob


low = 0
def solve(n, nums, target):
    # CODE HERE    
    high = n-1
    global low

    while(low<=high):
        avg = (low + high)//2

        if( nums[avg]== target):
            return avg
        elif( nums[avg] > target):
            high = avg - 1
            low = 0
            return solve( avg, nums, target )
        elif( nums[avg] < target):
            high = n
            low = avg + 1
            return solve( high, nums, target  )

    return -1



nums = [-1, 0, 3, 9, 12]
    
print(solve(6, nums, 11))