export default function AuViComponent({ children, index, title, subtitle }) {

    return (
        <div className="mt-22 border">
            <div className="flex border-b justify-around text-center uppercase font-extralight text-xs md:text-sm md:text-base">
                <div className="border-e flex-1"><h3 className="py-1 px-1 md:px-0">Hora</h3></div>
                <div className="border-e flex-8"><h3 className="py-1 px-1 md:px-0">Cena {index} - {title} <span className="normal-case">{subtitle}</span> </h3></div>
                <div className="border-e flex-1 hidden md:block"><h3 className="py-1">I/E</h3></div>
                <div className="flex-2 hidden md:block"><h3 className="py-1">Locação</h3></div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

