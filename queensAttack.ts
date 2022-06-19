function queensAttack(n: number, k: number, r_q: number, c_q: number, obstacles: number[][]): number {
    // Write your code here
    let board: number[][] = [...Array(n)].map(x=>Array(n).fill(222))  

    const verticalTargets = n - 1;
    const horizontalTargets = n - 1;
    let ones = 0;
    const r_qq = r_q - 1;
    const c_qq = c_q - 1;
    for (let i=0;i<n;i++){
        //diagonals
        if (r_qq + i < n && c_qq + i < n){
            board[r_qq + i][c_qq + i] = 1;
        } 
        if (r_qq - i > 0 && c_qq - i > 0){
            board[r_qq - i][c_qq - i] = 1
        }
        if (r_qq + i < n  && c_qq - i > 0){
            board[r_qq + i][c_qq - i] = 1
        }
        if (r_qq - i > 0 && c_qq + i < n ){
            board[r_qq - i][c_qq + i] = 1
        }
        // vertical
        if (r_qq - i > 0){
            board[r_qq - i][c_qq] = 1
        }
        if (r_qq + i < n){
            board[r_qq + i][c_qq] = 1
        }
        // horizontal
        if (c_qq - i > 0){
            board[r_qq][c_qq - i] = 1
        }
        if (c_qq + i < n){
            board[r_qq][c_qq + i] = 1
        }
    }
    for(let i=0; i<k; i++){
        board[obstacles[i][0] - 1][obstacles[i][1] - 1] = -1; //obstacles
    }
    board[r_qq][c_qq] = 0;
    console.log(board, ones)
    return 0;
}

queensAttack(5, 3, 4, 3, [[5,5], [4,2], [2,3]])
queensAttack(4, 0, 4 , 4, [])
