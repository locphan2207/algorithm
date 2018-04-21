// A child is running up a stair with n steps. The child can hop either 1, 2,
// or 3 steps at a time. Calculate how many possible ways for the child to run up
// the stair.

// ----Observation 1:
// n = 1 -> [1] -> 1 way
// n = 2 -> [1,1], [2] -> 2 ways
// n = 3 -> [1,2], [1,1,1], [2,1], [3] -> 4 ways
// n = 4 -> [1,3], [1,1,2], [2,2], [1,2,1], [1,1,1,1], [2,1,1], [3,1] -> 7 ways
// ---> We can see that except the first 3 steps, at n step, we can come up with
// all possible ways by look at previous step and add step needed to those steps
// to get to n
// FOr ex: n = 4
// Because the max hop can only be 3. So we only need to look back to 3 steps away from n.
// Which is n=1.
// Assume we are at n=1, we know all the ways to get there already, now we just need to
// add 3 to all those ways to get to n=4. So we have these so far, [1,3]
// Now assume we are already at n=2. whhat we need to do is just add 2 steps to all the ways we already know
// for n=2. So we have, [1,1,2], [2,2]
// Repeat the same logic when n=3, we add 1 step to n=3 result, we haev,
// [1,2,1], [1,1,1,1], [2,1,1], [3,1]
// Combine them all we now have all the possible ways to get to n=4 by just looking
// back to 3 results of previous 3 steps away.

// ----Oberservatin 2:
// Since the problems only ask the total number of ways, they don't need to see
// what ways they are. We can just add up 3 results of previous 3 steps.
// For example: n=4, we add results of n=1,2,3, we have 1 + 2 + 4 = 7 ways

// ----Solution: bottom up
// Calculate number of ways for each stap from 1 to n, store them into a hash.
// At step n, the number of ways will be sum of previous 3 results. Except the first 3 steps.
// For ex: n = 6, the result will be sum of results of n=3,4,5.

function tripleStep(n) {
  const hash = {1: 1, 2: 2, 3: 4}; // first 3 steps
  if (n <=3) return hash[n];

  for (let i = 4; i <=n; i++) { // calculate bottom up from 4 -> n
    hash[i] = hash[i-1] + hash[i-2] + hash[i-3];
  }

  return hash[n];
}

// ----Solution: Top down
// We have the base cases are when n <= 3,
// if n > 3, we resursively call the function,
// to get down to n = 3, then return back up
// One important thing: if we don't store the result of previous n.
// The recursive function will calcualte the same n many times.
// WE should create another arguments as a hash to store the calculated result

function tripleStep2(n, hash = {1: 1, 2: 2, 3: 4}) {
  if (n <=3) return hash[n];
  if (!hash[n-1]) hash[n-1] = tripleStep2(n-1, hash);
  if (!hash[n-2]) hash[n-2] = tripleStep2(n-2, hash);
  if (!hash[n-3]) hash[n-3] = tripleStep2(n-3, hash);
  return hash[n-1] + hash[n-2] + hash[n-3];
}

console.log(tripleStep(4));
console.log(tripleStep(5));
console.log(tripleStep(20));

console.log(tripleStep2(4));
console.log(tripleStep2(100));
