function beautifulBinaryString(b: string): number {
    // Write your code here
    let num = 0;
    for (let i=0; i<b.length - 2; i++){
        if (b[i] === '0' && b[i + 1] === '1' && b[i + 2] === '0') {
            i += 2;
            num++;
        }
    }
    return num;
}
