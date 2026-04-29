import AuViComponent from "@/components/AuViComponent";
import AuViContent from "@/components/AuViContent";
import Still from "@/components/Still";
import Carousel from "@/components/Carousel";

// Imagens
import roubo from "@/assets/images/audiovisual/a3.png"
import querela from "@/assets/images/audiovisual/a1.png"
import arbitrio from "@/assets/images/audiovisual/a2.png"
import hotel from "@/assets/images/audiovisual/a4.png"
import pecado from "@/assets/images/audiovisual/a5.png"
import luciano from "@/assets/images/audiovisual/a6.png"

// Carousel
import still1 from "../../../assets/images/banners/stil1.png"
import still2 from "../../../assets/images/banners/still2.png"

export default function AudioVisual() {
    return (
        <section id="audiovisual">

            {/* Cinema */}
            <AuViComponent index="05" title="Cinema e Audiovisual" subtitle="- Produção universitária e independente">
                <AuViContent 
                    time="15:30"
                    img={roubo}
                    title="O Roubo da Imagem"
                    date="2024"
                    type="Documentário - Longa Metragem"
                    description="Direção, roteiro, câmera, produção, som direto, pós produção, edição e identidade visual."
                    loc1="Facom/ufjf"
                    loc2="Nosso Moinho"
                    loc3="Estúdio de Memórias Juiz de Fora"
                    link="https://www.youtube.com/watch?v=DRHH2Zx0dkM"
                />
                <AuViContent 
                    time="16:00"
                    img={querela}
                    title="A querela"
                    date="2023"
                    type="Documentário - Curta Metragem"
                    description="Direção, roteiro, produção, pós produção, edição e identidade visual."
                    loc1="ufjf"
                    loc2="Museu de Artes Murilo Mendes"
                    loc3="Penido"
                    link="https://www.youtube.com/watch?v=GoqhKZw6Z9I"
                />
                <AuViContent 
                    time="16:30"
                    img={arbitrio}
                    title="Arbítrio"
                    date="2022"
                    type="Ficção, suspense - Curta Metragem"
                    description="Assistência de direção e produção."
                    loc1="Juiz de Fora"
                    link="https://www.youtube.com/watch?v=bc1vq4Enkbc"
                    bool={false}
                />
            </AuViComponent>

            <Carousel 
                images={[still1, still2]}
                interval={4000}
                height="h-[500px]"
            />

            {/* Podcasts */}
            <AuViComponent index="06" title="Produção de podcast">
                <AuViContent
                    time="17:00"
                    img={hotel}
                    title="Hotel Real"
                    date="2022"
                    type="Podcast narrativo expandido"
                    description="Roteirização, produção, locução e montagem"
                    loc1="Juiz de Fora"
                    link="https://open.spotify.com/show/69WOJYOhcGPN9NRmONbEEF"
                />
                <AuViContent
                    time="17:30"
                    img={pecado}
                    title="Pecado Original"
                    date="2022"
                    type="Podcast narrativo expandido"
                    description="Direção, roteirização, produção e identidade visual"
                    loc1="Juiz de Fora"
                    link="https://open.spotify.com/show/1vtoOrYJ4W9Zl4NE7inOyF"
                />
                <AuViContent
                    time="18:00"
                    img={luciano}
                    title="Luciano Cruz convida"
                    date="2026"
                    type="Videocast/ Bate papo"
                    description="Direção, roteirização, produção, pós produção, edição e identidade visual"
                    loc1="Grupo Libertempo"
                    loc2="Gaffe Studio"
                    link="https://www.youtube.com/watch?si=29twQC1TZ6_AHKQ4&v=4yidKm8IKNc&feature=youtu.be"
                    bool={false}
                />
            </AuViComponent>
        </section>
    )
}