// Write a function to calculate number of ways to represent a value n with
// 25 cent, 10 cent, 5 cent, and 1 cent.

function coins(n) {
  if (n <= 1) return n;
  const availableCoins = {1: [1], 5: [1,5], 10: [1,5,10], 25: [1,5,10,25]};
  const hash = {0:1, 1: 1};
  for ( let i = 2; i <= n; i++) {
    if (!hash[i]) hash[i] = 0;
    if (i >= 1) hash[i] += hash[i-1];
    if (i >= 5) hash[i] += hash[i-5];
    if (i >= 10) hash[i] += hash[i-10];
    if (i >= 25) hash[i] += hash[i-25];
  }
  console.log(hash);
  return hash[n];
}

// console.log(coins(1));
console.log(coins(6));
// console.log(coins(11));
// console.log(coins(27));
