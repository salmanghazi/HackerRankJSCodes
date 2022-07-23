function findDuplicate(arr: number[]): boolean {
    if (arr.length === 1) return false;
    if (arr.length === 0) return true;
    for (let i=0;i<arr.length;i++){
        if (arr[i] === arr[i+1]){
            return true;
        }
    }
    return false;
}

function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false;
    
    const maxOfArr = Math.max(...arr);
    const largestIndex = arr.indexOf(maxOfArr);

    if (maxOfArr === arr[arr.length-1] || largestIndex === 0 || maxOfArr === arr[0] || maxOfArr === arr[arr.length-1]) return false;

    // make 2 arrays now
    const firstArr = arr.slice(0,largestIndex)
    const secondArr = arr.slice(largestIndex+1, arr.length)


    //now check if both are sorted
    const sortedArr1 = [...firstArr].sort((a,b) => a-b);
    const sortedArr2 = [...secondArr].sort((a,b) => a-b).reverse();

    if (findDuplicate(sortedArr1) || findDuplicate(sortedArr2)) return false;
    
    return JSON.stringify(sortedArr1) === JSON.stringify(firstArr) && JSON.stringify(sortedArr2) === JSON.stringify(secondArr);
};

console.log(validMountainArray([0,3,2,1]))
console.log(validMountainArray([3,5,5]))
