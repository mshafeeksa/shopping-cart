import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUrl } from "../data";
import { priceMultiplier } from "../data";
export default function MainDisplayItem({updateCart, cart}) {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        const newFetchUrl = fetchUrl + "\\" + id;
        fetch(newFetchUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
                
            })
            .then(json => {
                setData(json);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    function handleAddCart() {
        const newCart = cart;
        const index = newCart.findIndex((element) => element.data.id === data.id);
        if (index === -1)
            newCart.push({ data, qty });
        else
            newCart[index].qty = newCart[index].qty + qty;
        updateCart(newCart);
    }

    return (
        <div className="app">
            {loading && <div className="loading-screen"> <h1 className="loading-text">Loading...</h1> </div>}
            {error && <div className="error-screen"> <h1 className="error-text">{`There was an error while loading - ${error}`}</h1> </div>}
            {data &&
            <div className="item-display-container flex justify-around items-center w-3/4 mx-auto my-32">
                <div className="image-area grow w-full flex justify-center">
                    <img src={data.image} alt={data.title} className="item-image w-1/2" />
                </div>
                <div className="details-area flex flex-col items-start grow w-full px-11">
                        <h1 className="text-2xl font-bold">{data.title}</h1>    
                        <span className="px-2 py-1 my-2 border border-slate-300">{`${data.rating.rate} ⭐ | ${data.rating.count} Ratings`}</span>
                        <div className="seperation border-b w-full my-4 border-slate-400"></div>
                    <div className="price text-3xl font-bold">{`Rs.${data.price * priceMultiplier}/-`}</div>
                    <span className="font-bold text-sm text-blue-600">inclusive of all taxes</span>
                    <div className="quantity-counter flex border border-slate-600 my-4 overflow-hidden rounded-sm">
                            <button className="qty-decrease text-white bg-red-600 size-6 text-4xl flex 
                        justify-center items-center" onClick={() => { if (qty > 0) setQty(qty - 1) }}>-</button>
                            <span className="qty flex justify-center items-center h-6 w-10 text-xl">{qty}</span>
                            <button className="qty-increase text-white bg-green-600 size-6 text-4xl flex 
                        justify-center items-center" onClick={() => { if (qty < 9) setQty(qty + 1) }}>+</button>
                    </div>
                        <div className="flex">
                            <button className="w-36 rounded-sm bg-yellow-400 font-bold text-black px-4 py-3 mb-3 hover:bg-yellow-500 transition-all mr-7" onClick={handleAddCart}>ADD TO CART</button>
                            {cart.length > 0 && <Link to="/cart"><button className="w-36 rounded-sm bg-blue-600 font-bold text-white px-4 py-3 mb-3 hover:bg-blue-800 transition-all">{`GO TO CART  ►`}</button></Link>}
                        </div>  
                    <h2 className="text-lg text-justify">{data.description}</h2>
                </div>
            </div> }
        </div>
    );
}