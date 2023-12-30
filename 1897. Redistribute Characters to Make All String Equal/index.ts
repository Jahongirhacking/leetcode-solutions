function makeEqual(words: string[]): boolean {
    const map = new Map<string, number>();
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
