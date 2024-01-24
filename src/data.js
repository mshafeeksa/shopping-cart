import Visa from "./assets/icons/visa.png"
import Gpay from "./assets/icons/gpay.png"
import Mastercard from "./assets/icons/mastercard.png"
import Applepay from "./assets/icons/applepay.png"
import Paypal from "./assets/icons/paypal.png"

import sliderImage1 from "./assets/banners/men-winter.jpg"
import sliderImage2 from "./assets/banners/women-apparels.jpg"
import sliderImage3 from "./assets/banners/formal-wears.jpg"
import sliderImage4 from "./assets/banners/jewellery.jpg"

import MenMenu from "./assets/icons/men.svg"
import WomenMenu from "./assets/icons/women.svg"
import JewelleryMenu from "./assets/icons/jewellery.svg"


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

export const sliderImages = [
    {id:1, img: sliderImage1},
    {id:2, img: sliderImage2},
    {id:3, img: sliderImage3},
    {id:4, img: sliderImage4},
]

export const menuIcons = [
    {name: "Men's Apparels", img: MenMenu, path:"/mens-apparels"},
    {name: "Women's Apparels", img: WomenMenu, path: "/womens-apparels"},
    {name: "Jewellery", img: JewelleryMenu, path:"/jewellery"}
]

export const Men = "men's clothing";
export const Women = "women's clothing";
export const Jewellery = "jewelery";

export const priceMultiplier = 200;