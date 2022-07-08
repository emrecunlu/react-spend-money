import { MainContext, useContext } from "../contexts/MainContext"
import { moneyFormat } from "../Helper"
import { useEffect, useState } from "react"

export default function Item ({ item }) {

    const { user, setUser, dispatch, basket } = useContext(MainContext)

    const [count, setCount] = useState(0)

    const hasBasketItem = basket.findIndex((basketItem) => basketItem.id === item.id)

    const addItem = () => {
        setCount(count => count += 1)
        setUser({
            ...user,
            money: user.money -= item.price
        })

        if (hasBasketItem === -1) {
            dispatch({
                ...item,
                type: 'ADD_ITEM',
                count: count,
                basketId: hasBasketItem
            })
        } else {
            dispatch({
                ...item,
                type: 'INCRASE_ITEM',
                count: count,
                basketId: hasBasketItem
            })
        }
    }
    
    const sellItem = () => {
        setCount(count => count -= 1)
        setUser({
            ...user,
            money: user.money += item.price
        })

        if (count - 1 <= 0) {
            dispatch({
                ...item,
                type: 'DELETE_ITEM',
                count: count,
                basketId: hasBasketItem
            })
        } else {
            dispatch({
                ...item,
                type: 'DECRASE_ITEM',
                count: count,
                basketId: hasBasketItem
            })
        }
    }
    
    return (
        <>
            <div className="item bg-white p-5 rounded">
                <div className="item-avatar">
                    <img className="w-32 h-32 object-center mx-auto" src={item.avatar} alt="" />
                </div>
                <div className="item-title mt-5 text-center">
                    <span className="font-semibold text-emerald-900 text-lg">{item.title}</span>
                </div>
                <div className="item-price text-center mt-3">
                    <span className="font-semibold text-emerald-900 text-xl">{user.currency}{moneyFormat(item.price)}</span>
                </div>
                <div className="item-buttons grid grid-cols-3 items-center mt-5">
                    <button className="text-white font-semibold rounded py-2 disabled:bg-slate-200 bg-red-600 transition-all" onClick={sellItem} disabled={count <= 0}>SELL</button>
                    <span className="text-center font-semibold">{count}</span>
                    <button className="text-white font-semibold rounded py-2 bg-green-600 disabled:bg-slate-200 transition-all" onClick={addItem} disabled={item.price > user.money}>BUY</button>
                </div>
            </div>
        </>
    )
} 