import { Nav } from "../../components/nav"
import { SideBar } from "../../components/sidebar"
import { Footer } from "../../components/footer"
import { Outlet } from "react-router-dom"

export function Layout() {
    return(
        <>
            <Nav></Nav>
            <SideBar></SideBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}