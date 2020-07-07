/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
  const len1 = s.length,
    len2 = p.length;
  // 构造dp[i][j]
  const dp = new Array(len1 + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(len2 + 1).fill(false);
  }
  // 初始化
  dp[0][0] = true;
  for (let j = 1; j < len2 + 1; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }
  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[len1][len2];
};

console.log(isMatch('mississippi', 'mis*is*p*.'));
