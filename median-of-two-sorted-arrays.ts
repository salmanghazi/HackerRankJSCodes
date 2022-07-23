function mergeTwoArraysLogN(first: number[], second: number[]): number[] {
    const third = [...first, ...second]
    const sortedArr = third.sort((a,b) => a-b);
    return sortedArr;
}

function mergeTwoArraysLinear(first: number[], second: number[]): number[] {
    let i = 0,  j = 0
    let third: number[] = [];
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            third.push(first[i])
            i++;
        }
        else {
            third.push(second[j])
            j++;
        }
    }

    if (i<first.length) {
        while(i < first.length){
            third.push(first[i])
            i++;
        }
    }
    else if (j<second.length) {
        while(j < second.length){
            third.push(second[j])
            j++;
        }
    }

    return third;
}

function findMedian(sortedArr: number[]): number {
    const mid = Math.floor(sortedArr.length/2);
    if (sortedArr.length % 2 !== 0) return sortedArr[mid];
    return ((sortedArr[mid] + sortedArr[mid - 1])/2);
}

const linearlyMerged = mergeTwoArraysLinear([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]);
const logNMerged = mergeTwoArraysLogN([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]);

console.log(findMedian(linearlyMerged))
console.log(findMedian(logNMerged))
