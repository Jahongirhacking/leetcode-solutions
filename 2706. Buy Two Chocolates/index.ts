function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    const twoChoco = prices[0] + prices[1];
    if (twoChoco > money) return money;
    return money - twoChoco;
};
