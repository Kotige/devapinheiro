import { Download } from "lucide-react";

export default function ProdDoc () {
    return (
        <div className="border mb-6 md:flex">
            <h4 className="flex gap-2 justify-center py-1 md:px-2 uppercase font-extralight text-xs md:border-r md:text-center"> Documentos de <br className="hidden md:block" /> Produção</h4>
            <div className="flex gap-2 justify-center items-center py-2 border-t md:border-none md:ps-6">
                <div><Download size={19}/></div> 
                <a href="/cvDevanirPinheiro.pdf" target="_blank" rel="noopener noreferrer">
                    <p className="font-light">Currículo Devanir Pinheiro</p>
                </a>
            </div>
        </div>
    )
}