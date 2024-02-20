import { Nav } from "../../components/nav/nav"
import { SideBar } from "../../components/sidebar/sidebar"
import { Footer } from "../../components/footer/footer"
import { Outlet } from "react-router-dom"
import './main.scss'

export function Layout() {
    return(
        <>  
            <SideBar></SideBar>
            <div  style={{marginLeft: "18vw"}}>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    )
}