**Question:**  
You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle? You can only use the scale once.

**Answer:**  
Label each bottle from 1 to 20. The label means how many pills we will take out and put on the scale.  
Ex: Bottle 1 take 1 pill to the scale. Bottle 2 take 2 pills to the scale. And so on, for other bottles...
Here are all the cases:
- If bottle 1 is the heavy bottle, the total measurement will be **210.1gram** because we only take 1 pill from that bottle
- If bottle 2 is the heavy bottle, the total measurement will be **210.2gram** because we only take 2 pills from that bottle
...
- If bottle 10 is the heavy bottle, the total measurement will be **211.0gram**
...
- If bottle 19 is the heavy bottle, the total measurement will be **211.9gram**
- If bottle 20 is the heavy bottle, the total measurement will be **212.0gram**

-> Therefore, we can know which bottle is the heavy one by just looking at the measurement result
