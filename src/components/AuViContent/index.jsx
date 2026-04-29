export default function ({time, bool=true, title, type, date, img, link, description, loc1, loc2, loc3}) {
    return (
        <div className={bool ? "border-b" : ""}>
            <div className="flex">
                <div className="flex-1 border-e flex items-center justify-center">
                    <p className="text-center text-sm md:text-base px-1 md:px-0 font-extralight">{time}</p>
                </div>
                <div className="flex-8 border-e">
                    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start py-4 px-4 text-center md:text-start">
                        <div className="mb-4 md:mb-0 pe-6 w-55 h-60 aspect-video">
                            <a href={link}
                                target="_blank"
                            >
                                <img 
                                    src={img} 
                                    alt={title} 
                                    className="w-full h-full object-contain"
                                />
                            </a>
                        </div>
                        <div className="flex flex-col gap-1 font-extralight">
                            <h4 className="font-light">{title} ({date})</h4>
                            <p>{type}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block flex-1 border-e">

                </div>
                <div className="hidden md:block flex-2 pt-3">
                    <div className="flex flex-col">
                        <p className="font-extralight uppercase px-2">{loc1}</p>
                        <p className="font-extralight uppercase px-2">{loc2}</p>
                        <p className="font-extralight uppercase px-2">{loc3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}