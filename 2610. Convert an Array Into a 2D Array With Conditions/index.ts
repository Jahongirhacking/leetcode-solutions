function findMatrix(nums: number[]): number[][] {
    const res = [];
    while (nums.length) {
        const temp = [];
        const set = new Set();
        for (let num of nums) {
            if (set.has(num)) {
                temp.push(num);
            } else {
                set.add(num);
            }
        }
        res.push([...set]);
        nums = [...temp];
    }
    return res;
};
