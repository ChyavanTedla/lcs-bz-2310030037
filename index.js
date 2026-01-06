function longestCommonSubstringLength(s1, s2) {
  const m = s1.length
  const n = s2.length

  // Create DP table
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0))

  let maxLength = 0

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        maxLength = Math.max(maxLength, dp[i][j])
      }
    }
  }

  return maxLength
}

const str1 = "abcdef"
const str2 = "zcdemf"

const result = longestCommonSubstringLength(str1, str2)
console.log("Longest Common Substring Length:", result)
