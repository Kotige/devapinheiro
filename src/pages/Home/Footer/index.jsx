export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center mt-28">
            <h2 className="text-2xl md:text-3xl text-center uppercase font-bold mb-12">
                Vamos agendar a próxima diária?
            </h2>
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col md:flex-row border items-center pb-2 md:pb-0">
                    <p className="flex-2 font-extralight uppercase text-xs md:text-sm md:ps-6 py-3">e-mail</p>
                    <a href=""
                        className="flex-10"
                    >
                        <h4 className="text-base md:text-2xl font-bold">devanir.alves@outlook.com.br</h4>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row border items-center pb-2 md:pb-0">
                    <p className="flex-2 font-extralight uppercase text-xs md:text-sm md:ps-6 py-3">whatsapp</p>
                    <a href=""
                        className="flex-10"
                    >
                        <h4 className="text-base md:text-2xl font-bold">(33) 99810-5064</h4>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row border items-center pb-2 md:pb-0">
                    <p className="flex-2 font-extralight uppercase text-xs md:text-sm md:ps-6 py-3">linkedin</p>
                    <a href="https://www.linkedin.com/in/devanirpinheiro/"
                        target="_blank"
                        className="flex-10"
                    >
                        <h4 className="text-base md:text-2xl font-bold"> www.linkedin.com/in/devanirpinheiro</h4>
                    </a>
                </div>
            </div>
        </footer>
    )
}