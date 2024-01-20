import { Outlet, NavLink, Link } from "react-router-dom";
import LogoText from "../assets/logo/threaded-text-trim.png";
import { navItems } from "../data";
import Cart from "../assets/icons/bag.svg";
import Profile from "../assets/icons/profile.svg";
import Search from "../assets/icons/search.svg";
export default function Root() {
    return (
        <>
            <header className="h-20 bg-gray-100 flex items-center text-gray-600 w-full fixed top-0">
                <div className="header-container h-2/5 flex items-baseline w-full">
                    <div className="logo-section h-full mr-10 shrink-0"><img className="h-full pl-4" src={LogoText} alt="Threaded" /></div>
                    <div className="nav-section flex grow">
                        <NavItems/>
                    </div>
                    <div className="end-nav-section flex items-baseline h-full mr-8">
                        <RightHeaderItems/>
                    </div>
                </div>
            </header>
            <div id="main-body" className="text-gray-600">
                <Outlet/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

function Footer() {
    
}

function RightHeaderItems() {
    return (
        <>
            <Link className="icon-box h-full flex items-baseline mx-4 shrink-0"><img src={Search} alt="Search" className="h-5/6 mt-auto shrink-0"/></Link>
            <Link to="profile" className="icon-box h-full flex items-baseline justify-center mx-4 shrink-0"><img src={Profile} alt="Profile" className="h-5/6"/></Link>
            <Link className="icon-box h-full flex justify-end relative mx-4 shrink-0">
                <img src={Cart} alt="Shopping cart" className="h-5/6 shrink-0" />
                <div className="count-box absolute rounded-full -top-2 -right-2 bg-red-500 size-5 flex justify-center items-center text-white text-xs">0</div>
            </Link>
        </>
    );
}

function NavItems() {
    return (
        <>
            {navItems.map((item) => {
                return (
                    <NavLink key={item.id} to={item.path} className="mx-4 whitespace-nowrap">
                        {item.name}
                    </NavLink>
                );
            })}
        </>
    );
}
