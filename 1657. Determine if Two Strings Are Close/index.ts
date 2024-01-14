function closeStrings(word1: string, word2: string): boolean {
    const numberOfChars = (string: string, map: Map<string, number>) => {
        for (let char of string) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else map.set(char, 1);
        }
    }

    const checkEqualityOfArrays = (arr1: (string | number)[], arr2: (string | number)[]) => {
        console.log(arr1, arr2);
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

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
    );
};
