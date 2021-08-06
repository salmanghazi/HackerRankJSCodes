function makeAnagram(a: string, b: string): number {
    // Write your code here
    const charsA = a.split('');
    const charsB = b.split('');
    var j;
    for (j=0;j<charsA.length;j++) {
        var i;    
        var charA = charsA[j];
        for (i=0; i<charsB.length;i++){
            if (charA.localeCompare(charsB[i]) === 0){
                charsA.splice(j,1);
                charsB.splice(i,1);
                j--;
                break;
            }
        }
    };
    return charsA.length+charsB.length;
}
