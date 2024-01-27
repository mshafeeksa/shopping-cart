import { menuIcons } from "../data";
import "../styles/custom.css"
import { Link } from "react-router-dom";
export default function MenuIcons() {
    return (
        menuIcons.map((icon) => {
            return (
            <Link key={icon.name } to={icon.path} className="menu-link">
                <div className="icon-main-box flex-col mx-1 md:mx-4">
                    <div className="icon-box border overflow-hidden">
                        <img src={icon.img} alt={icon.name} className="flex md:flex-col w-60 transition-all" />
                    </div>
                    <span className="text-center text-lg block mt-4">{icon.name}</span>
                </div>
            </Link>
            );        
        })
    );
}