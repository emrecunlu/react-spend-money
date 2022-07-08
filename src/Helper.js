const moneyFormat = money => {
    return money.toLocaleString()
}

const basketTotal = basket => {
    let totalMoney = 0

    basket.forEach((item) => totalMoney += item.price * item.count)

    return totalMoney
}

export {
    moneyFormat,
    basketTotal
}