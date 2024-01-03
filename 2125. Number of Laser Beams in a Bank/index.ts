function numberOfBeams(bank: string[]): number {
    let res = 0;
    let temp = [];
    for (let floor of bank) {
        let cnt = 0;
        for (let sign of floor) cnt += Number(sign);
        cnt && temp.push(cnt);
    }

    for (let i = 0; i < temp.length - 1; i++) {
        res += temp[i] * temp[i + 1];
    }

    return res;
};
