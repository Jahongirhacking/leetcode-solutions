function minOperations(s: string): number {
    let n = s.length;
    let cnt1 = 0, cnt2 = 0;

    for (let i = 0; i < n; ++i) {
        if (i % 2 === 0) {
            s[i] === '0' ? cnt1++ : cnt2++;
        } else {
            s[i] === '1' ? cnt1++ : cnt2++;
        }
    }

    return Math.min(cnt1, cnt2);
};
