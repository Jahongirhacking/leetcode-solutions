# Approach
- Sort the array
- Find the difference between the product of maximum-two and minimum-two elements

# Complexity
- Time complexity: O(NlogN)

# Code

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    const temp = [...nums];
    temp.sort((a,b) => b-a);
    const [w, x] = temp;
    const [y, z] = [temp.pop(), temp.pop()];
    return w*x-y*z;
};
```
```typescript []
function maxProductDifference(nums: number[]): number {
    const temp = [...nums];
    temp.sort((a,b) => b-a);
    const [w, x] = temp;
    const [y, z] = [temp.pop(), temp.pop()];
    return w*x-y*z;
};
```

Solution Link: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4419152/immutable-approach-solution-in-javascript/

