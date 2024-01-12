# Problem Description Link
https://leetcode.com/problems/determine-if-string-halves-are-alike

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    const n = s.length;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const numOfVowels = (str) => {
        const arr = str.split("");
        return arr.filter(char => vowels.includes(char)).length;
    }
    const firstHalf = s.slice(0, Math.floor(n / 2));
    const secondHalf = s.slice(Math.floor(n / 2));
    return numOfVowels(firstHalf) === numOfVowels(secondHalf);
};
```
