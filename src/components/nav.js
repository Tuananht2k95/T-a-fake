import 'bootstrap/dist/css/bootstrap.min.css'

export function Nav() {
    return(
        <>
            <div id="nav" className="d-flex justify-content-between">
                <ul className="d-flex list-group">
                    <li>
                        <a className="nav-link" href="#" role="button"> 
                            1
                        </a>
                    </li>
                    <li>

                    </li>
                </ul>
                <ul className="d-flex list-group">
                    <li>
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
                    <li>

                    </li>
                </ul>
            </div>
        </>
    )
}