import { useEffect, useRef, useState } from "react";

export default function Still({src, alt = "", className = "" , repeat=6, speed=0.5 }) {

    const ref = useRef(null);
    const animationRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    
    useEffect(() => {
        const el = ref.scrollWidth / 2;
        if (el) {
            el.scrollLeft = el.scrollWidth / 2;
        }
    }, []);

    const handleScroll = () => {
        const el = ref.current;
        if (!el) return;

        const max = el.scrollWidth - el.clientWidth;
        const middle = max / 2;
        const threshold = 50;

        if (el.scrollLeft <= threshold || el.scrollLeft >= max - threshold) {
            el.scrollLeft = middle;
        }
    };

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const animate = () => {
            if (!isPaused) {
                el.scrollLeft += speed;
            }
            animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [isPaused, setIsPaused]);

    return (
        <div
            ref={ref}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="relative left-1/2 right-1/2 w-screen md:w-[98.9vw] -translate-x-1/2 overflow-x-auto md:overflow-x-hidden no-scrollbar">
            <div className="flex h-[75vh] md:overflow-hidden md:h-auto">
                {Array.from({length: repeat }).map((_,i) => (
                    <img
                        key={`${src}-${i}`}
                        src={src} 
                        alt={alt} 
                        className={`h-full min-w-[300%] md:min-w-[90%] md:overflow-hidden object-cover touch-pan-x ${className}`}
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                    />
                ))}
                
            </div>
        </div>
    );
}