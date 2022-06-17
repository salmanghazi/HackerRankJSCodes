function diagonalDifference(arr: number[][]): number {
    // Write your code here

    const rToL = arr.map((elem, ind) => elem[ind])
    const lToR = arr.reverse().map((elem, ind) => elem[ind])
    const sumRToL = rToL.reduce((acc, ind) => acc + ind, 0);
    const sumLToR = lToR.reduce((acc, ind) => acc + ind, 0);
    return Math.abs(sumLToR - sumRToL)
}
