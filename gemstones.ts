function gemstones(arr: string[]): number {
    // Write your code here

    let arr2: string[] = [];
    for (let i=0; i<26; i++) {
        let flag = true;
        for (let j = 0; j < arr.length; j++) {
            if (!arr[j].includes(String.fromCharCode(97 + i))) {
                flag = false;
                break;
            }
        }
        if (flag) arr2.push(String.fromCharCode(97 + i));
    }
    return arr2.length;
}
