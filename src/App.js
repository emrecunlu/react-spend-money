import { MainProvider } from "./contexts/MainContext"
import Header from "./components/Header"
import { useEffect } from "react"
import Items from "./components/Items"
import Basket from "./components/Basket"

export default function App () {

  useEffect(() => {
    document.body.className = 'bg-gray-100'
  }, [])

  return (
    <>
      <MainProvider>
        <Header />
        <Items />
        <Basket />
      </MainProvider>
    </>
  )
}