import { Outlet, NavLink, Link } from "react-router-dom";
import LogoText from "../assets/logo/threaded-text-trim.png";
import LogoTextWhite from "../assets/logo/threaded-text-white.png"
import { navItems, payIcons, customerLinks } from "../data";
import Cart from "../assets/icons/bag.svg";
import Profile from "../assets/icons/profile.svg";
import Burger from "../assets/icons/burger.svg";
import "../styles/burger.css"
export default function Root({cartCount}) {
    return (
        <>
            <header className="h-12 xl:h-20 bg-gray-100 flex items-center text-gray-600 w-full sticky top-0 shadow-lg z-40">
                <div className="hidden xl:header-container xl:h-2/5 xl:flex xl:items-end xl:w-full">
                    <div className="logo-section h-full mr-10 shrink-0"><Link to={"/"}><img className="h-full pl-4" src={LogoText} alt="Threaded" /></Link></div>
                    <div className="nav-section flex shrink-0 self-end">
                        <NavItems/>
                    </div>
                    <div className="end-nav-section flex items-end justify-end h-full mr-8 grow ml-4">
                        <RightHeaderItems cartCount={cartCount} />
                    </div>
                </div>
                <div className="xl:hidden h-8 mx-0 xl:mx-4 flex justify-between w-full">
                    <label className="hamburger-menu">
                        <input type="checkbox" />
                    </label>
                    <aside className="sidebar">
                        <nav>
                            <div>This</div>
                            <div>Is</div>
                            <div>The</div>
                            <div>Sidebar</div>
                        </nav>
                    </aside>
                    <Link to="/" className="h-full"><img src={LogoText} alt="Threaded" className="h-full"/></Link>
                    <Link to="/cart" className="h-full"><img src={Cart} alt="Cart" className="h-full"/></Link>
                </div>
            </header>
            <div id="main-body" className="text-gray-600 grow">
                <Outlet/>
            </div>
            <footer className="bg-slate-900 text-zinc-100 pt-6">
                <Footer/>
            </footer>
        </>
    );
}


function Footer() {
    return (
        <>
            <div className="signup-box flex flex-col justify-center items-center">
                <h1 className="text-2xl my-3 font-bold">Signup for 10% discount</h1>
                <h2 className="my-3">Get Discounts & News Direct to Your Inbox!</h2>
                <form className="my-9">
                    <input type="email" name="email" className="border rounded-sm border-zinc-100 bg-slate-900 mr-4 transition"/>
                    <button type="button" className="border border-zinc-100 px-2 py-1 rounded-md hover:bg-zinc-100 hover:text-slate-900 transition">Signup</button>
                </form>
            </div>
            <div className="bottom flex my-20 mx-2 md:mx-40 justify-between items-center">
                <div className="customer-info">
                    <h1 className="text-xl font-bold">Customer Information</h1>
                    <InfoLinks/>
                </div>
                <div className="logo shrink-0">
                    <img src={LogoTextWhite} alt="Threaded" className="w-28 xl:w-40 shrink-0"/>
                </div>
            </div>
            <div className="payment-modes flex justify-center items-center">
                {
                    payIcons.map((icon) => {
                        return (
                            <div key={icon.id} className="icon w-10 h-8 bg-slate-200 mx-1 flex justify-center items-center">
                                <img src={icon.img} alt={icon.name} className="max-h-full w-auto"/>
                            </div>
                        );
                    })
                }
            </div>
            <div className="created-by mt-6 flex justify-center">
                <span className="text-center text-xs">Created with React.js and ♥ by Mohammed Shafeek, 2024</span>
            </div>
        </>
    );
}

function InfoLinks() {
    return (
        <>
            <ul>
                {customerLinks.map((linkItem) => {
                    return (
                        <li key={linkItem.id} className="my-3"><Link to={"/"} className="hover:border-b border-zinc-100">{linkItem.text}</Link></li>
                    );
                })}
            </ul>
        </>
    );
}

function RightHeaderItems({ cartCount }) {
    return (
        <>
            <form className="search-bar mx-4">
                <input type="search" placeholder="Search..."/>
                <button type="submit">Search</button>
            </form>
            <Link to="/" className="icon-box h-full flex items-center justify-center mx-4 shrink-0"><img src={Profile} alt="Profile" className="h-5/6"/></Link>
            <Link to="/cart" className="icon-box h-full flex justify-end items-center relative mx-4 shrink-0">
                <img src={Cart} alt="Shopping cart" className="h-5/6 shrink-0" />
                <div className="count-box absolute rounded-full -top-2 -right-2 bg-red-500 size-5 flex justify-center items-center text-white text-xs">{cartCount}</div>
            </Link>
        </>
    );
}

function NavItems() {
    return (
        <>
            {navItems.map((item) => {
                return (
                    <NavLink key={item.id} to={item.path} className={({ isActive, isPending }) =>
                      isActive
                        ? "active main-category mx-4 whitespace-nowrap"
                        : isPending
                        ? "pending main-category mx-4 whitespace-nowrap"
                        : "main-category mx-4 whitespace-nowrap"
                    }>
                        {item.name}
                    </NavLink>
                );
            })}
        </>
    );
}
