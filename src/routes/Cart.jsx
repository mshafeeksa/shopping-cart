import { priceMultiplier } from "../data";
export default function Cart({ updateCart, cart }) {
    function decreaseQty(index) {
        let newCart = cart.slice();
        newCart[index].qty -= 1;
        updateCart(newCart);
    }
    function increaseQty(index) {
        let newCart = cart.slice();
        newCart[index].qty += 1;
        updateCart(newCart);
    }
    function deleteItem(index) {
        let newCart = cart.slice();
        newCart.splice(index, 1);
        updateCart(newCart);
    }
    function calculateCartTotal() {
        let cartTotal = 0;
        cart.map(item => cartTotal += Math.floor(item.data.price * priceMultiplier * item.qty));
        return cartTotal;
    }
    return (
        <div className="cart-container w-3/4 mx-auto">
            <div className="header text-5xl my-10 font-bold">Your Cart</div>
            {cart.map((item,index) => {
                return (
                    <div key={item} className="item-wrapper flex justify-center my-8 border-b border-slate-500 py-8">
                        <div className="image-side w-full h-full p-8 flex justify-center">
                            <img src={item.data.image} alt={item.data.title} className="object-contain size-full w-60" />
                        </div>
                        <div className="details-side w-full flex flex-col justify-center items-start">
                            <h1 className="text-2xl font-bold">{item.data.title}</h1>
                            <span className="text-xl font-bold">Price: </span><span className="text-lg font-bold">{`Rs.${Math.floor(item.data.price * priceMultiplier)}/-`}</span>
                            <h2 className="flex items-center text-lg font-bold mt-3">Qty: <div className="quantity-counter flex border border-slate-600 my-1 overflow-hidden rounded-sm ml-4">
                            <button className="qty-decrease text-white bg-red-600 size-5 text-3xl flex 
                        justify-center items-center" onClick={() => { if (item.qty > 1) decreaseQty(index) }}>-</button>
                            <span className="qty flex justify-center items-center h-5 w-8 text-lg">{item.qty}</span>
                            <button className="qty-increase text-white bg-green-600 size-5 text-3xl flex 
                        justify-center items-center" onClick={() => { if (item.qty < 9) increaseQty(index) }}>+</button>
                            </div>
                            </h2>
                            <span className="text-2xl font-bold my-3">Total: Rs.{item.qty * Math.floor(item.data.price * priceMultiplier)}/-</span>
                            <button className="rounded-md bg-red-600 text-white px-2 py-1 hover:bg-red-800 transition-all" onClick={()=>deleteItem(index)}>Remove from cart</button>
                        </div>

                    </div>);
            })}
            <div className="checkout-section flex justify-end my-8 items-center font-bold">
                <div className="grand-total mr-10 text-3xl">
                    Grand Total: Rs. {calculateCartTotal()}/-
                </div>
                <div className="checkout-button bg-yellow-600 flex justify-center text-white px-3 py-1 text-2xl hover:bg-yellow-800 transition-all">
                    <button>Checkout ►</button>
                </div>
            </div>
        </div>
    );
}