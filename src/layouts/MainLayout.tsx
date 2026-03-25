import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Fonts } from "../components/Fonts"


export const MainLayout = () => {
  return (
    <>
    <Fonts />
    <Header />
    <Outlet />
    </>
  )
}
