import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss'
export function Footer() {
    return(
        <div id='footer'>
            <footer className='col-8 m-auto'>
                <ul className="nav justify-content-center border-bottom">
                    <li className="nav-item">
                        <button className='btn btn-dark'>Facebook</button>
                    </li>
                    <li className="nav-item">
                        <button className='btn btn-dark'>Insta</button>
                    </li>
                    <li className="nav-item">
                        <button className='btn btn-dark'>X</button>
                    </li>
                </ul>
                <h6 className='text-center'>Đây là sản phẩm của LTA</h6>
            </footer>
        </div>
    )
}