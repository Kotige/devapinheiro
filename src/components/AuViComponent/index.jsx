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
                <div>
                    <div className="flex items-center justify-center py-[13.7vh] border-b">
                        <p className="font-extralight text-sm md:text-base">
                            {time1}
                        </p>
                    </div>
                    <div className="flex items-center justify-center py-[17vh] border-b">
                        <p className="font-extralight text-sm md:text-base">
                            {time2}
                        </p>
                    </div>
                    <div className="flex items-center justify-center py-[17vh]">
                        <p className="font-extralight text-sm md:text-base">
                            {time3}
                        </p>
                    </div>
                </div>
            </div>
            {/* Main */}
            <div className="flex flex-col flex-4 md:flex-9 border-e">
                <div className="flex justify-center border-b uppercase">
                    <h3 className="text-sm md:text-base font-extralight py-1">Cena {index} - {title}</h3>
                </div>
                <div className="flex p-2 md:p-4 border-b">
                    <div className="me-6">
                        <img 
                            src={img1} 
                            alt={alt1} 
                            className="w-[25vh]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold">{title1}</h2>
                        <p>{type1}</p>
                        <p>{desc1}</p>
                    </div>
                </div>
                <div className="flex p-2 md:p-4 border-b">
                    <div className="me-6">
                        <img 
                            src={img2} 
                            alt={alt2} 
                            className="w-[22vh]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold">{title2}</h2>
                        <p>{type2}</p>
                        <p>{desc2}</p>
                    </div>
                </div>
                <div className="flex p-2 md:p-4">
                    <div className="me-6">
                        <img 
                            src={img3} 
                            alt={alt3} 
                            className="w-[25vh]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold">{title3}</h2>
                        <p>{type3}</p>
                        <p>{desc3}</p>
                    </div>
                </div>
            </div>
            {/* Intern / Extern */}
            <div className="hidden md:flex md:flex-col md:flex-1 border-e">
                <div className="flex justify-center border-b">
                    <h3 className="font-extralight text-base py-1">I/E</h3>
                </div>
                <div className="flex justify-center pt-5 h-[37.6vh] border-b">
                </div>
                <div className="flex justify-center pt-5 h-[37.6vh] border-b">
                </div>
                <div className="flex justify-center pt-5 h-[37.6vh]">
                </div>
            </div>
            {/* Location */}
            <div className="hidden md:flex md:flex-col md:flex-3">
                <div className="flex border-b items-center justify-center">
                    <h3 className="uppercase font-extralight py-1">Locação</h3>
                </div>
                <div className="p-3 font-extralight border-b">
                    {loc1}
                </div>
            </div>
        </div>
        
    )
}