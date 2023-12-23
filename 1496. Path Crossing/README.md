# Problem Description Link
https://leetcode.com/problems/path-crossing/description/

# Approach
<!-- Describe your approach to solving the problem. -->
- Create set for saving hash values
- Hash code should be unique string for one coordinate
- I use `X-Y` as a hash code

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
``` javascript []
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const coord = [0, 0];
    const set = new Set();
    set.add("0-0")
    for(let direction of path.split('')) {
        switch(direction) {
            case 'N': 
                coord[0]++;
                break;
            case 'S':
                coord[0]--;
                break;
            case 'E':
                coord[1]++;
                break;
            case 'W':
                coord[1]--;
                break;
        }
        const hash = `${coord[0]}-${coord[1]}`;
        if(set.has(hash)) return true;
        set.add(hash);
    }
    return false;
};
```
```typescript []
function isPathCrossing(path: string): boolean {
    const coord = [0, 0];
    const set = new Set();
    set.add("0-0")
    for (let direction of path.split('')) {
        switch (direction) {
            case 'N':
                coord[0]++;
                break;
            case 'S':
                coord[0]--;
                break;
            case 'E':
                coord[1]++;
                break;
            case 'W':
                coord[1]--;
                break;
        }
        const hash = `${coord[0]}-${coord[1]}`;
        if (set.has(hash)) return true;
        set.add(hash);
    }
    return false;
};
```

https://leetcode.com/problems/path-crossing/solutions/4447930/easy-solution-using-hash-table-in-javascript-typescript/
