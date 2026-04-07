export default function Scene ({
    index,
    title,
    time,
    intExt,
    location,
    content,
}) {
    return (
        <div className="flex border items-around justify-center">
            {/* Time */}
            <div className="flex flex-col flex-1 border-e">
                <div className="flex items-center justify-center border-b">
                    <h3 className="uppercase font-extralight text-sm md:text-base py-1">Hora</h3>
                </div>
                <div className="flex items-center justify-center pt-[20vh]">
                    <p className="font-extralight text-sm md:text-base">
                        {time}
                    </p>
                </div>
            </div>
            {/* Main */}
            <div className="flex flex-col flex-4 md:flex-9 border-e">
                <div className="flex justify-center border-b uppercase">
                    <h3 className="text-sm md:text-base font-extralight py-1">Cena {index} - {title}</h3>
                </div>
                <div className="p-2 md:p-4">
                    <p className="font-extralight text-sm md:text-base">
                        {content}
                    </p>
                </div>
            </div>
            {/* Intern / Extern */}
            <div className="hidden md:flex md:flex-col md:flex-1 border-e">
                <div className="flex justify-center border-b">
                    <h3 className="font-extralight text-base py-1">I/E</h3>
                </div>
                <div className="flex justify-center pt-5">
                    <p className="font-extralight">
                        {intExt}
                    </p>
                </div>
            </div>
            {/* Location */}
            <div className="hidden md:flex md:flex-col md:flex-3">
                <div className="flex border-b items-center justify-center">
                    <h3 className="uppercase font-extralight py-1">Locação</h3>
                </div>
                <div className="p-3 font-extralight">
                    {location}
                </div>
            </div>

        </div>
    )
}