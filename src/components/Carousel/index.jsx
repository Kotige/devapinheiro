import { useEffect, useRef, useState } from "react";

export default function Carousel({
    src1,
    src2,
    alt1 = "",
    alt2 = "",
    className = "",
    repeat = 12,
    speed = 0.5,
}) {

    const ref = useRef(null);
    const animationRef = useRef(null);

    const [isPaused, setIsPaused] = useState(false);

    // Sequência 121212...
    const images = Array.from({ length: repeat }, (_, i) => ({
        src: i % 2 === 0 ? src1 : src2,
        alt: i % 2 === 0 ? alt1 : alt2,
    }));

    // Duplica para criar loop infinito
    const loopImages = [...images, ...images];

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        requestAnimationFrame(() => {
            el.scrollLeft = el.scrollWidth / 2;
        });
    }, []);

    const handleScroll = () => {
        const el = ref.current;

        if (!el) return;

        const max = el.scrollWidth - el.clientWidth;
        const middle = max / 2;
        const threshold = 100;

        if (
            el.scrollLeft <= threshold ||
            el.scrollLeft >= max - threshold
        ) {
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

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isPaused, speed]);

    return (
        <div
            ref={ref}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="
                relative
                left-1/2
                right-1/2
                w-screen
                -translate-x-1/2
                overflow-x-auto
                no-scrollbar
                touch-pan-x
                whitespace-nowrap
            "
        >
            <div className="flex">
                {loopImages.map((image, i) => (
                    <div
                        key={`${image.src}-${i}`}
                        className="
                            shrink-0
                            min-w-[85vw]
                            md:min-w-[45vw]
                        "
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            draggable={false}
                            loading="lazy"
                            decoding="async"
                            className={`
                                block
                                w-full
                                h-[50vh]
                                md:h-75
                                object-cover
                                select-none
                                will-change-transform
                                ${className}
                            `}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}