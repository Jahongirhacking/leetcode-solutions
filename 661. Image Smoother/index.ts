function imageSmoother(img: number[][]): number[][] {
    const moves = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1], [0, 0]];
    const n = img.length;
    const m = img[0].length;
    const cloneImg = [];
    for (let _ of img) cloneImg.push((new Array(m)).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const averageObj = { sum: 0, cnt: 0 };
            for (const [x, y] of moves) {
                if (img[i + x] && img[i + x][j + y]!==undefined) {
                    averageObj.sum += img[i + x][j + y];
                    averageObj.cnt++;
                }
            }
            if (averageObj.cnt) cloneImg[i][j] = Math.floor(averageObj.sum / averageObj.cnt);
        }
    }
    return cloneImg;
};
