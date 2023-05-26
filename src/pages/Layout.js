import { Outlet, NavLink } from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className="nav-item"><NavLink className="nav-link" to={props.link}>{props.linkName}</NavLink></li>
    )
};

const DropdownNavItem = (props) => {
    return (
        <li><NavLink className="nav-link dropdown-item" to={props.link} >{props.linkName}</NavLink></li>
    )
}

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
                            <NavItem link="/SaleCalculator" linkName="SaleCalculator" />
                            <NavItem link="/BuyAmountSale" linkName="BuyAmountSale" />
                            <NavItem link="/TipCalculator" linkName="TipCalculator" />
                        </ul>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <DropdownNavItem link="/" linkName="Home" />
                            <DropdownNavItem link="/SaleCalculator" linkName="SaleCalculator" />
                            <DropdownNavItem link="/BuyAmountSale" linkName="BuyAmountSale" />
                            <DropdownNavItem link="/TipCalculator" linkName="TipCalculator" />
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};
export default Layout;