import Item from "./Item"
import { MainContext, useContext } from "../contexts/MainContext"

export default function Items () {

    const { items, basket } = useContext(MainContext)

    return (
        <>
            <div className="items mt-5 max-w-5xl mx-auto grid  md:grid-cols-2 xl:grid-cols-3 gap-5">
                {items.map((item, index) => {
                    return (
                        <Item key={index} item={item} />
                    )
                })}
            </div>
        </>
    )
}