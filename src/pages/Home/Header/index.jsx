export default function Header() {
    return(
        <header className="text-white">
            <h1 className="uppercase text-center font-extrabold text-2xl md:text-3xl mb-4 md:mb-6">ODD - Ordem do Dia </h1>
            {/* Título */}
            <div className="flex justify-start border mb-6 md:mb-8 md:py-2">
                <div className="flex flex-1 py-1 px-6 items-center">
                    <h3 className="text-[.7em] md:text-lg font-extralight uppercase">Título</h3>
                </div>
                <div className="flex items-center flex-20 text-sm md:text-3xl">
                    <h2>Portifólio Devanir Pinheiro Alves</h2>
                </div>
            </div>
            {/* Cronograma */}
            <div className="flex justify-around border">
                {/* Previsão de Início */}
                <div className="flex flex-col flex-1 justify-around items-center p-0">
                    <div className="flex flex-1 py-[3px] md:py-[4px] items-center">
                        <p className="font-extralight text-[.65rem] md:text-lg">Previsão de Início</p>
                    </div>
                    <div className="flex items-center justify-center flex-3 py-2 md:py-4 border-t w-full h-full">
                        <p className="text-4xl md:text-5xl font-bold">08:00</p>
                    </div>
                </div>
                {/* Previsão de Almoço */}
                <div className="flex flex-col flex-1 border-l border-r justify-around items-center p-0">
                    <div className="flex flex-1 py-[3px] md:py-[4px] items-center">
                        <p className="font-extralight text-[.65rem] md:text-lg">Previsão de Almoço</p>
                    </div>
                    <div className="flex items-center justify-center flex-3 py-2 md:py-4 border-t w-full h-full">
                        <p className="text-4xl md:text-5xl font-bold">13:00</p>
                    </div>
                </div>
                {/* Previsão de Término */}
                <div className="flex flex-col flex-1 justify-around items-center p-0">
                    <div className="flex flex-1 py-[3px] md:py-[4px] items-center">
                        <p className="font-extralight text-[.65rem] md:text-lg">Previsão de Término</p>
                    </div>
                    <div className="flex items-center justify-center flex-3 py-2 md:py-4 border-t w-full h-full">
                        <p className="text-4xl md:text-5xl font-bold">18:30</p>
                    </div>
                </div>
            </div>
        </header>
    )
}