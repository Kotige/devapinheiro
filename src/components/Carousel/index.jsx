import { useEffect, useState } from "react";

export default function Carousel({
    images = [],
    interval = 3000,
    height = "h-[400px]",
}) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    },[images.length, interval]);

    return (
        <div className={`w-full  ${height}`}>
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {images.map((img, index) =>(
                    <div
                        key={index}
                        className="w-full flex-shrink-0 flex items-center justify-center bg-black"
                    >
                        <img 
                            src={img} 
                            alt={`slide-${index}`} 
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}