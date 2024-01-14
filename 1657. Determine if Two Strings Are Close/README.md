# Problem Description Link:
https://leetcode.com/problems/determine-if-two-strings-are-close

# Approach
<!-- Describe your approach to solving the problem. -->
- Record the characters and their number on a Map
- Create a function to check if two arrays are both equal
- After sorting characters and their occurance number, check array equality 

# Complexity
- Time complexity: O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
``` javascript []
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const numberOfChars = (string, map) => {
    for (let char of string) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else map.set(char, 1);
    }
}

const checkEqualityOfArrays = (arr1, arr2) => {
    console.log(arr1, arr2);
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

var closeStrings = function (word1, word2) {
    const map1 = new Map();
    const map2 = new Map();
    numberOfChars(word1, map1);
    numberOfChars(word2, map2);
    return (
        checkEqualityOfArrays(
            [...map1.keys()].sort(), 
            [...map2.keys()].sort()
        ) && checkEqualityOfArrays(
            [...map1.values()].sort((a, b) => a - b),
            [...map2.values()].sort((a, b) => a - b)
        )
};
```
