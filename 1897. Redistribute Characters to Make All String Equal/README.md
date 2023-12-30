# Approach
<!-- Describe your approach to solving the problem. -->
- Count each letters among all words
- If there is a letter which its number is not divisible by length of the words array then return false, else return true 

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const map = new Map();
    for (const word of words) {
        word.split('').forEach(letter => {
            if (map.has(letter)) map.set(letter, map.get(letter) + 1);
            else map.set(letter, 1);
        })
    }
    for (const value of map.values()) {
        if (value % words.length !== 0) return false;
    }
    return true;
};
```
