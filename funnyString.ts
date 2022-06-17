function funnyString(s: string): string {
    // Write your code here
    let arr: number[] = [], arr2: number[] = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s.charCodeAt(i));
    }

    for (let i = 0, j = arr.length - 1; i < arr.length - 1, j > 1; i++, j--) {
        let a = Math.abs(arr[i] - arr[i+1]);
        let b = Math.abs(arr[j] - arr[j-1]);
        if (a !== b) return 'Not Funny';
    }
    return 'Funny';
}
