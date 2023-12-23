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
