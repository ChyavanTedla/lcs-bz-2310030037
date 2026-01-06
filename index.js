
function countSubsetsWithSumLE(arr, limit) {
  let count = 0;

  function backtrack(index, currentSum) {
    if (currentSum > limit) return; 
    if (index === arr.length) {
      count++;
      return;
    }

    // Include current element
    backtrack(index + 1, currentSum + arr[index]);

    // Exclude current element
    backtrack(index + 1, currentSum);
  }

  backtrack(0, 0);
  return count;
}

const arr = [1, 2, 3];
const limit = 5;

const result = countSubsetsWithSumLE(arr, limit);
console.log(`Number of subsets with sum <= ${limit}:`, result);
