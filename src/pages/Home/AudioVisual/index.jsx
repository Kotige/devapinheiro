import AuViComponent from "@/components/AuViComponent";
import Still from "@/components/Still";

// Imagens
import arbitrio from "@/assets/images/audiovisual/arbitrio.png"
import hotel from "@/assets/images/audiovisual/hotel.jpg"
import pecado from "@/assets/images/audiovisual/pecado.jpg"
import querela from "@/assets/images/audiovisual/querela.png"
import roubo from "@/assets/images/audiovisual/roubo.jpg"

export default function AudioVisual() {
    return (
        <section id="audiovisual">
            <AuViComponent 
                index="05" title="Cinema e Audiovisual"
                time1="15:30" img1={roubo} title1="O Roubo da Imagem (2024)" type1= "Documentário - Longa Metragem" desc1="Direção, roteiro, câmera, produção, som direto, pós produção, edição e identidade visual." loc1="FACOM/UFJF NOSSO MOÍNHO ESTÚDIO DE MEMÓRIAS JUIZ DE FORA"
                time2="16:00"
            />
        </section>
    )
}