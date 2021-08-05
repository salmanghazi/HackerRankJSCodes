function matchingStrings(strings: string[], queries: string[]): number[] {
    // Write your code here
    let arr = new Array(queries.length);
    queries.find((query, idx) => {
        arr[idx] = 0;
        for (var i=0; i<strings.length; i++){
            if (query.localeCompare(strings[i]) === 0){
                console.log(query, idx, i);
                arr[idx]++;
            }
        }
    })
    return arr;
}
