export default function Home() {
    return (
        <>
            <div className="slider-area">
                <div className="swiper">
                    {/* Additional required wrapper */}
                        <div className="swiper-wrapper">
                        {/* Slides */}
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    ...
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination" />
                {/* If we need navigation buttons */}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
                </div>
            </div>
        </>
    );
}