import { Link } from "react-router-dom";
import { priceMultiplier } from "../data";

export default function DisplayItem({ item }) {
    return (
        <div className="item-box m-14 flex flex-col hover:scale-105 transition-all">
            <Link to={"/" + item.id} className="h-full">
                <div className="image-title-box h-full flex flex-col justify-between items-center border border-slate-600 p-4 w-72 min-h-96 mx-7 relative shadow-lg">
                    <div className="image-container">
                        <img src={item.image} alt={item.title} className="w-56 h-64 object-contain" />
                        <div className="rating-box absolute inline top-2 right-2 z-10 bg-white bg-opacity-80">
                            <span className="px-2 py-1">{`${item.rating.rate} ⭐ | ${item.rating.count}`}</span>
                        </div>
                    </div>
                    <h1 className="text-center text-xl font-bold">{item.title}</h1>
                    <h2 className="text-xl">{`Rs. ${Math.floor(item.price * priceMultiplier)}`}</h2>
                </div>
            </Link>
        </div>  
    );
}
4
                