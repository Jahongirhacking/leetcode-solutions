function maxProductDifference(nums: number[]): number {
    const temp = [...nums];
    temp.sort((a,b) => b-a);
    const [w, x] = temp;
    const [y, z] = [temp.pop(), temp.pop()];
    return w*x-y*z;
};
