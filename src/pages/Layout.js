import { Outlet, NavLink } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><b>Money Saver Calculator</b></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/SaleCalculator">SaleCalculator</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/BuyAmountSale">BuyAmountSale</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/TipCalculator">TipCalculator</NavLink>
                            </li>

                        </ul>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="nav-link dropdown-item" to="/" >Home</NavLink></li>
                            <li><NavLink className="nav-link dropdown-item" to="/SaleCalculator" >SaleCalculator</NavLink></li>
                            <li><NavLink className="nav-link dropdown-item" to="/BuyAmountSale" >BuyAmountSale</NavLink></li>
                            <li><NavLink className="nav-link dropdown-item" to="/TipCalculator" >TipCalculator</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};
export default Layout;