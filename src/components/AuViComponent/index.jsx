export default function AuViComponent(
    {
        img1, img2, img3,
        alt1, alt2, alt3, 
        time1, time2, time3, 
        loc1, loc2, loc3, 
        desc1, desc2, desc3,
        title1, title2, title3,
        type1, type2, type3,
        index, title
    }) {
    return (
        <div className="flex border items-around justify-center mt-12">
            {/* Time */}
            <div className="flex flex-col flex-1 border-e">
                <div className="flex items-center justify-center border-b">
                    <h3 className="uppercase font-extralight text-sm md:text-base py-1">Hora</h3>
                </div>
                <div className="font-extralight text-sm text-center pt-[9rem]">
                    <p>{time1}</p>
                </div>
                <div className="font-extralight text-sm text-center pt-[9rem]">
                    <p>{time2}</p>
                </div>
            </div>
                {/* Main */}
            <div className="flex flex-col flex-4 md:flex-9 border-e">
                <div className="flex justify-center border-b uppercase">
                    <h3 className="text-sm md:text-base font-extralight py-1">Cena {index} - {title}</h3>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:px-6 md:py-4">
                    {/* Image */}
                    <div className="flex items-center justify-center py-4">
                        <img src={img1} alt={alt1} className="w-[60%] "/>
                    </div>
                    {/* Description */}
                    <div className="flex flex-col px-2 py-2 font-extralight text-center text-sm md:text-base">
                        <p className="font-bold">
                            {title1}
                        </p>
                        <p>
                            {type1}
                        </p>
                        <p>
                            {desc1}
                        </p>
                    </div>
                </div>
                <div className="flex-col">
                    {/* Image */}
                    <div className="">
                        <img src={img2} alt={alt2} />
                    </div>
                    {/* Description */}
                    <div className="flex flex-col">
                        <p>
                            {title2}
                        </p>
                        <p>
                            {type2}
                        </p>
                        <p>
                            {desc2}
                        </p>
                    </div>
                </div>
                <div className="flex-col">
                    {/* Image */}
                    <div className="">
                        <img src={img3} alt={alt3} />
                    </div>
                    {/* Description */}
                    <div className="flex flex-col">
                        <p>
                            {title3}
                        </p>
                        <p>
                            {type3}
                        </p>
                        <p>
                            {desc3}
                        </p>
                    </div>
                </div>
            </div>
            {/* Intern / Extern */}
            <div className="hidden md:flex md:flex-col md:flex-1 border-e">
                <div className="flex justify-center border-b">
                    <h3 className="font-extralight text-base py-1">I/E</h3>
                </div>
            </div>
            {/* Location */}
            <div className="hidden md:flex md:flex-col md:flex-3">
                <div className="flex border-b items-center justify-center">
                    <h3 className="uppercase font-extralight py-1">Locação</h3>
                </div>
                <div className="font-extralight p-4 text-sm">
                    <p>{loc1}</p>
                </div>
                <div>
                    <p>{loc2}</p>
                </div>
                <div>
                    <p>{loc3}</p>
                </div>
            </div>

        </div>
    )
}