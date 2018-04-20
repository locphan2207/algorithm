**Question:**  
There are 100 light bulbs which are OFF initially. A man turns on all bulbs on first round. On second round, he turns off every 2 bulbs. On the third, he toggles every 3 bulbs. On ith round, he toggles every i bulbs. He does it for 100 rounds.
After 100 rounds, how many light bulbs are on?

**Answer:**  
- Take a look at bulb 1, it will be only toggled on round 1. -> ON
- At bulb 2, it is toggled on round 1 and 2. -> OFF
- At bulb 3, it is toggle on round 1 and 3. -> OFF
- At bulb 4, it is toggle on round 1, 2, and 4 -> ON
- At bulb 5, it is toggle on round 1 and 5 -> OFF
- At bulb 6, it is toggle on round 1, 2, 3, 6 -> OFF  

-> We realize the pattern that, at bulb n, it will be toggle on the round number that are the same as factor number of n. So the light at the end will be ON of OFF depends on the number of factors of that bulb. If that bulb has even number of factors, it will be OFF at the end, if it has odd number of factors, it will be ON at the end.  
-> What bulb will have odd number of factors. Those are the bulbs that have perfect square root such as 1 4 9 16 25...100. In other words, the bulb number that are square by 1 -> 10. We can count there are 10 perfect square root numbers from 1 -> 100. So, at the end, there are **10 bulbs** which are ON.
