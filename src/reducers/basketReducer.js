export default function reducer (basket, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...basket,
                {
                    id: action.id,
                    price: action.price,
                    title: action.title,
                    count: action.count + 1
                }
            ]
        case 'INCRASE_ITEM':
            basket[action.basketId].count += 1
            return [...basket]
        case 'DELETE_ITEM':
            basket.splice(action.basketId, 1)
            return [...basket]
            basket[action.basketId].count -= 1
            return [...basket]
        case 'DECRASE_ITEM':
            basket[action.basketId].count -= 1
            return [...basket]
        default:
            return [...basket]
    }
}