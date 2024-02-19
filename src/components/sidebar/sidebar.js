import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
import './sidebar.scss'

export function SideBar() {
    return(
        <>
            <aside id="aside" className="col-2 position-absolute top-0 start-0">
                <div id="logo">
                    <a href="#" className="d-flex nav-link">
                        <img alt='' className="" src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" />
                        <p className="pAside">AdminLTE 3</p>
                    </a>
                </div>
                <div id="user" className="d-flex">
                    <img alt='' className="" src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" />
                    <span className="pAside">Le Tuan Anh</span>
                </div>
                <div id="aside-search">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Button className="btn btn-success" type="submit">Search</Button>
                    </form>
                </div>
                <ul className="list-group">
                    <li>
                        <h4>Quản lý Users</h4>
                        <ul className="list-group">
                            <li className="ms-4">
                                <Link to="/users" className="nav-link d-flex">
                                    <p>Danh sách Users</p>
                                </Link> 
                            </li>
                            <li className="ms-4">
                                <Link to="/users/create" className="nav-link d-flex">
                                    <p>Thêm mới User</p>
                                </Link> 
                            </li>
                            <li className="ms-4">
                                <Link to="/users/:userID/edit" className="nav-link d-flex">
                                    <p>Update User</p>
                                </Link> 
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </>
    )
}