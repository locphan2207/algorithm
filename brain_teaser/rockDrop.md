**Question:**  
There is a building of 100 floors. If a rock drops from the Nth floor or above, it will break, if below Nth floor, it will not break. Find that N by minimum number of drops to test.

**Answer:**  
Similar idea to binary search. We choose middle number of floor for each range of floors we know for sure N will be. For example, the first drop will be on 50th floor. If rock breaks, we know N must be lower range from 0 to 49, so the next drop will be in the middle of that range which is floor 25. On the other hand, if the rock does not break, we know N must be in lower range from 51 to 100, so the next drop will be on floor 75. Drop and repeat the same process will divide the range by half for each drop until there is only one floor in the range. That is when we know for sure N is that floor.
