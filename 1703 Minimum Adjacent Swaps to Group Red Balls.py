/*
There are N balls positioned in a row. Each of them is either red or white . In one move we can swap two adjacent balls. We want to arrange all the red balls into a consistent segment. What is the minimum number of swaps needed?

Given string S of length N built from characters "R" and "W", representing red and white balls respectively, returns the minimum number of swaps needed to arrange all the red balls into a consistent segment. If the result exceeds 10^9, return -1.

Input:WRRWWR
Output: 2
Explanation:
We can move the last ball two positions to the left:

swap R and W -> WRRWRW
swap R and W -> WRRRWW
*/


def min_swaps(s: str) -> int:
    reds = []
    for i, chr in enumerate(s):
        if chr == "R":
            reds.append(i)
    n = len(reds)
    if n == 0:
        return 0
    start_ptr = 0
    end_ptr = n - 1
    count = 0
    while start_ptr < end_ptr:
        count += reds[end_ptr] - reds[start_ptr] - end_ptr + start_ptr
        start_ptr += 1
        end_ptr -= 1
    return -1 if count > 10 ** 9 else count