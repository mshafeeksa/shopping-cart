import { sliderImages } from "../data";
import ImageSlider from "../helper-components/Image-slider";
import "../styles/image-slider.css"
import MenuIcons from "../helper-components/Menu-Icons";

export default function Home() {
    return (
        <>
            <div className="sliderArea">
                <ImageSlider slides={sliderImages} />
            </div>
            <div className="menu-area flex w-11/12 md:w-3/4 mx-auto my-14 justify-evenly">
                <MenuIcons/>            
            </div>
        </>
    );
}

