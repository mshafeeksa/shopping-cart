import Visa from "./assets/icons/visa.png"
import Gpay from "./assets/icons/gpay.png"
import Mastercard from "./assets/icons/mastercard.png"
import Applepay from "./assets/icons/applepay.png"
import Paypal from "./assets/icons/paypal.png"


export const fetchUrl = "https://fakestoreapi.com/products";

export const navItems = [
    { id:1, name: "Men's Apparels", path: "/mens-apparels" },
    { id:2, name: "Women's Apparels", path: "/womens-apparels" },
    { id:3, name: "Jewellery", path: "/jewellery" },
]

export const customerLinks = [
    {id: 1, text: "Search"},
    {id: 2, text: "FAQs"},
    {id: 3, text: "Privacy Policy"},
    {id: 4, text: "Returns Policy"},
    {id: 5, text: "Terms of Service"},
]

export const payIcons = [
    { id: 1, img: Visa, name: "Visa" },
    { id: 2, img: Gpay, name: "G Pay" },
    { id: 3, img: Applepay, name: "Apple Pay" },
    { id: 4, img: Mastercard, name: "Mastercard" },
    { id: 5, img: Paypal, name: "Paypal" },
]