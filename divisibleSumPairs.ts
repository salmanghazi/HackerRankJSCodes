function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    // Write your code here
    // const arr = ar.sort();
    let result = 0;
    let movingIndex = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) result++;
        }
    }
    return result;
}
