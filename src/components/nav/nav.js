import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.scss'


export function Nav() {
    return(
        <>
            <div id="nav" className="d-flex justify-content-between border-bottom">
                <ul className="nav d-flex flex-row list-group">
                    <li className='nav-item'>
                        <h3>Đây là logo</h3>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>
                            <button className='btn btn-light'>Home</button>
                        </Link>
                    </li>
                </ul>
                <ul id='navRight' className="d-flex flex-row-reverse list-group nav">
                    {/* <li className='nav-item'>
                        <form className="" role="search">
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
                    </li> */}
                    <li className='nav-item'>
                        <Button variant="primary">Đăng xuất</Button>
                    </li>
                    <li>
                        <button className='btn btn-success'>Thông báo</button>
                    </li>
                    <li>
                    <   button className='btn btn-dark'>Tin nhắn</button>
                    </li>
                </ul>
            </div>
        </>
    )
}