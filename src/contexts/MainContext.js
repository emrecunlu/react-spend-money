import { createContext, useContext, useReducer, useState } from "react";
import basketReducer from '../reducers/basketReducer'
import products from '../items.json'

const MainContext = createContext()

function MainProvider ({ children }) {

    const [items, setItems] = useState(products)
    const [user, setUser] = useState({
        name: 'Other Boy',
        avatar: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
        money: 1000,
        currency: '$'
    })
    
    const [basket, dispatch] = useReducer(basketReducer, [])
    const [showInput, setShowInput] = useState(false)

    const data = {
        items,
        setItems,
        basket,
        user,
        setUser,
        dispatch,
        showInput,
        setShowInput
    }

    return (
        <>
            <MainContext.Provider value={data}>
                {children}
            </MainContext.Provider>
        </>
    )
}

export { MainProvider, useContext, MainContext }