**Question:**
There are 1000 bottle. One of them is poisoned. The only way to test if a bottle is poisoned is by using a test strip. If we drop poisoned solution into the test strip, test strip will turn black after 7 days. How would you find out the poisoned bottle in least number of days as possible with these rules:
- There are 10 test strips for you to use.
- It takes 7 days to get test strip to show the result
- Once a test strip turns black, it will be black forever. (It never changes color back to original color)
- You can mix as many liquid from different bottles and drop that mixed solution into a test strip, if that solution contains a poison, test strip will also turn black.
- Each test strip can only be used once a day.

**Answer:**  
There are many solutions, but the best one is to use binary representation.  
Label each bottle with a number from 0 to 999.
Use 10 mix solution label 0 to 9. Each solution will be used with one test strip.
Those 10 mix solutions is the representation of 10 digit in binary number of each label.  
For example:
- For bottle **1**, its binary is **0000000001**, so we put 1 drop of bottle 1 into solution number 0.  
...  
- For bottle **7**, its binary is **0000000111**, so we put 1 drop of bottle 7 into solution number 0, 1, 2.  
...
- For bottle **345**, its binary is **101011001**, so we put 1 drop of bottle 345 into solution number 0, 3, 4, 6, 8.  
...  

We do the same thing for all bottles from 0 to 999. After 7 days, when the test strips show the result, which test strip turns black corresponding to the solution number will so the binary representation of the poisoned bottle.  

For example:  
- After 7 days, if we see test strip number 2, 3, 5, 6, 8, 9 turn black, we know its corresponding binary representation is **1101101100**, then we know for sure that poisoned bottle is bottle with label **876**
