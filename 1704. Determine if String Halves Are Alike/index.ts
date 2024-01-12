function halvesAreAlike(s: string): boolean {
    const n = s.length;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const numOfVowels = (str: string) => {
        const arr = str.split("");
        return arr.filter(char => vowels.includes(char)).length;
    }
    const firstHalf = s.slice(0, Math.floor(n / 2));
    const secondHalf = s.slice(Math.floor(n / 2));
    return numOfVowels(firstHalf) === numOfVowels(secondHalf);
};
