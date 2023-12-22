function maxScore(s: string): number {
    let score = s.split('').filter(el => el === '1').length;
    let max = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const el = s[i];
        el === '1' ? score-- : score++;
        max = Math.max(max, score);
    }
    return max;
};
