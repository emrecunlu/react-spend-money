import { MainContext, useContext } from "../contexts/MainContext"
import { moneyFormat } from "../Helper"

export default function Header () {

    const { setUser, user, items, showInput, setShowInput } = useContext(MainContext)

    const changeHandle = e => {
        setShowInput(false)
        
        if (e.target.value !== '') {
            setUser({
                ...user,
                money: parseInt(e.target.value)
            })
        }
    }

    return (
        <>
            <header className="mt-5">
                <div className="user-detail max-w-5xl mx-auto bg-white py-12 mb-5">
                    <div className="user-avatar">
                        <img className="rounded-full h-32 object-cover object-center w-32 mx-auto" src={user.avatar} alt={user.name} />
                    </div>
                    <div className="user-name text-center mt-10">
                        <span className="font-bold text-emerald-900 text-2xl">Spend {user.name}'s Money</span>
                    </div>
                </div>
                <div className="total-money" onDoubleClick={() => setShowInput(show => !show)}>
                    <div className="max-w-5xl mx-auto text-center py-5" style={{
                        background: 'linear-gradient(180deg,#2ecc71,#1abc9c)',
                        
                    }}>
                        <span className="text-white text-2xl font-bold">{user.currency}{moneyFormat(user.money)}</span>
                    </div>  
                </div>
            </header>
            {showInput && (
                <div className="max-w-5xl mx-auto">
                    <input type="text" className="block w-full h-16 outline-none px-5 mt-5 text-center text-2xl" onBlur={changeHandle} />
                </div>
            )}
        </>
    )
}