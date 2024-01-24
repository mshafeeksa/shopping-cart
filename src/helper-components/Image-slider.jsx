import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
import { useEffect, useState } from "react";

export default function ImageSlider({ slides }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);

    useEffect(() => {
        let timeInterval;
        if (!isInteracting) {
            timeInterval = setInterval(showNextImage, 4000);
        }
        return ()=> clearInterval(timeInterval);
    },[isInteracting])

    function showNextImage() {
        setImageIndex(index => {
            if (index === slides.length - 1)
                return 0;
            return index + 1;
        })
    }
    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0)
                return slides.length-1;
            return index-1;
        })        
    }
    return (
        <div className="full-w-h" onMouseEnter={()=>setIsInteracting(true)} onMouseLeave={()=>setIsInteracting(false)}>
            <div className="full-w-h slider-wrapper">
                {slides.map(slide =>
                    <img key={slide.img} src={slide.img} alt={`Banner ${imageIndex}`} className="image-slider-image" style={{translate: `${-100*imageIndex}%`}}/>
                )}
            </div>
            <button onClick={showPrevImage} className="image-slider-button .left-slider-button"><ArrowBigLeft/></button>
            <button onClick={showNextImage} className="image-slider-button right-slider-button"><ArrowBigRight /></button>
            <div className="index-dot-container">
                {slides.map((slide, index) => (
                    <button key={slide.img} onClick={()=>setImageIndex(index)} className="index-dot">{index === imageIndex? <CircleDot/>: <Circle/> }</button>
                ))}
            </div>
        </div>
    );
}