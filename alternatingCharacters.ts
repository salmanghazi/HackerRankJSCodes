function alternatingCharacters(s: string): number {
    // Write your code here
    const arr = s.split('');
    var count=0, i;
    for (i=0; i<arr.length-1;i++){
        if (!(arr[i].localeCompare(arr[i+1]))){
            count++;
        }
    }
    return count;
}
