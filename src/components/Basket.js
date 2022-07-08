import { MainContext, useContext } from "../contexts/MainContext"
import { basketTotal, moneyFormat } from "../Helper"
import { useEffect, useState } from "react"

export default function Basket () {

    const { basket, user } = useContext(MainContext)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(basketTotal(basket))
    }, [basket])
    
    return (
        <>
            {basket.length > 0 && (
                <div className="basket max-w-5xl mx-auto bg-white mt-5 py-10 text-center">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-[23px] font-semibold">Your Receipt</h1>
                        <ul className="mt-5">
                            {basket && basket.map((item, index) => (
                                <li className="grid grid-cols-3 py-2" key={index}>
                                    <span className="font-semibold">{item.title}</span>
                                    <span className="font-semibold">x{item.count}</span>
                                    <span className="font-semibold text-green-600">{user.currency}{moneyFormat(item.count * item.price)}</span>
                                </li>
                            ))}
                        </ul>
                        <hr className="my-4" />
                        <div className="total-money grid grid-cols-2">
                            <span className="font-semibold">TOTAL MONEY</span>
                            <span className="font-semibold text-green-600">{user.currency}{moneyFormat(basketTotal(basket))}</span>
                        </div>
                    </div>
                </div>
            )}  
        </>
    )
}