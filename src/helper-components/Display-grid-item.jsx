import { Link } from "react-router-dom";
import { priceMultiplier } from "../data";

export default function DisplayItem({ item }) {
    return (
        <div className="item-box m-2 w-full sm:m-14 flex flex-col hover:scale-105 transition-all">
            <Link to={"/" + item.id} className="h-full">
                <div className="image-title-box h-full flex flex-col justify-between items-center border border-slate-600 p-1 sm:p-4 sm:w-72 sm:min-h-96 mx-1 sm:mx-7 relative shadow-lg">
                    <div className="image-container">
                        <img src={item.image} alt={item.title} className="w-36 sm:w-56 sm:h-64 object-contain" />
                        <div className="rating-box absolute inline top-0 right-0 sm:top-2 sm:right-2 z-10 bg-white bg-opacity-80">
                            <span className="px-2 py-1 text-sm sm:text-base">{`${item.rating.rate} ⭐ | ${item.rating.count}`}</span>
                        </div>
                    </div>
                    <h1 className="text-center text-base sm:text-xl font-bold">{item.title}</h1>
                    <h2 className="text-base sm:text-xl">{`Rs. ${Math.floor(item.price * priceMultiplier)}`}</h2>
                </div>
            </Link>
        </div>  
    );
}
4
                