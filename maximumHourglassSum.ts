function hourglassSum(arr: number[][]): number {
  // Write your code here
  const [row, col] = [arr.length, arr[0].length];
  console.log(row, col)
  var i, j;
  var currentSum = 0,
    highestSum = 0;
  for (i = 0; i < row - 2; i++) {
    for (j = 0; j < col - 2; j++) {
      //     currentSum+=arr[i][j]
      currentSum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) + arr[i + 1][j + 1] + (arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);
      if (currentSum > highestSum) {
        highestSum = currentSum
      }
    }
  }
  return highestSum;
}
