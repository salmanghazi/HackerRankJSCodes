function compareTriplets(a: number[], b: number[]): number[] {
    // Write your code here
    let result: number[] = [0, 0];
    a.forEach((elem, ind) => {
        if (elem === b[ind]) return;
        if (elem < b[ind]) result[1] += 1;
        if (elem > b[ind]) result[0] += 1;
    })
    return result;
}
