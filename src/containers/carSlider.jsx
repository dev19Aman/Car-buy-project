import { useState, useRef } from "react";
import Slider from "react-slick";
import Car1 from '../assets/images/car1-remove.png'
import Car2 from '../assets/images/car2-remove.png'
import Car3 from '../assets/images/car3-remove.png'
import Service from '../assets/icons/leads/service.svg'
import Speed from '../assets/icons/leads/speed.svg'
import Sets from '../assets/icons/leads/sets.svg'
import RightArrow from '../assets/icons/leads/right-arrow.png'
import LeftArrow from '../assets/icons/leads/left-arrow.png'


export const CarSlider = () => {
    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 3,
        centerMode: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerPadding: "10px",
        className: "gap-10",
        afterChange: (index) => setCurrentSlide(index),
    };
    return (
        <main className="relative ">
            <Slider {...settings} ref={sliderRef}>
                {sliderData.map((i) => (
                    <div>
                        <div className="h-52 bg-[#FFFCD2] shadow py-2 pl-2 rounded w-52 text-xs font-semibold"
                            style={{ backgroundColor: i.bg }}>
                            <p>80% Recommend</p>
                            <div className="h-[60%] flex items-end">
                                <img src={i.img} height={100} />
                            </div>
                            <p className='text-sm'>Lamborghini Urus</p>
                            <div className="text-[#4D4D4D] text-xs flex justify-between mt-4 pr-3">
                                <div className='flex gap-3 items-center'>
                                    <span className="flex gap-1 items-cente">
                                        <img src={Speed} height={100} />
                                        154Km
                                    </span>
                                    <span className="flex gap-1 items-center">
                                        <div className="border border-[#4D4D4D] rounded-full p-[2px]">
                                            <img src={Service} height={100} />
                                        </div>
                                        <img src={Sets} height={100} />
                                    </span>
                                </div>
                                <span>Price 5k $</span>
                            </div>
                        </div>
                    </div>
                ))}

            </Slider>
            <button className={`${arrowCss} left-0`} onClick={previous} disabled={currentSlide === 0}>
                <img src={LeftArrow} height={100} />
            </button>
            <button className={`${arrowCss} right-0`} onClick={next} disabled={currentSlide === 3}>
                <img src={RightArrow} height={100} />
            </button>
        </main>

    );
};

const arrowCss = "text-white absolute bottom-20 cursor-pointer bg-black rounded-full w-8 h-8 flex items-center justify-center"
const sliderData = [
    {
        id: 1,
        img: Car1,
        bg: '#FFFCD2'
    },
    {
        id: 2,
        img: Car2,
        bg: '#FCEBEB'
    },
    {
        id: 3,
        img: Car3,
        bg: '#E3ECF1'
    },
    {
        id: 3,
        img: Car3,
        bg: '#FCEBEB'
    },
    {
        id: 3,
        img: Car3,
        bg: '#FCEBEB'
    },
]