import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import './nav.scss'

export function Nav() {
    return(
        <>
            <div id="nav" className="d-flex justify-content-between">
                <ul className="nav d-flex list-group">
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>

                    </li>
                </ul>
                <ul className="d-flex list-group nav">
                    <li className='nav-item'>
                        <form className="d-flex" role="search">
                            <input 
                                id="searchButton"
                                className="me-2 d-none" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search">
                            </input>
                            <button type="button">
                                Tìm kiếm
                            </button>
                        </form>
                    </li>
                    <li className='nav-item'>

                    </li>
                </ul>
            </div>
        </>
    )
}