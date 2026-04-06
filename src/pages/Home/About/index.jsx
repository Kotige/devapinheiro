import deva from "@/assets/images/about/perfil.png";

export default function About() {
    return (
        <section id="about" className="border my-6">
            {/* Title */}
            <div className="border-b mb-4">
                <h2 className="text-center text-sm md:text-lg py-[2px] md:py-1">Briefing do Projeto</h2>
            </div>
            {/* Content */}
            <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="flex md:flex-1 items-center justify-center mb-4">
                    <img 
                        src={deva} 
                        alt="Devanir Pinheiro"
                        className="w-50" 
                    />
                </div>
                {/* Text */}
                <div className="md:flex-2 text-center md:text-left text-xs md:text-base px-4 md:px-0 md:pe-12">
                    <p className="my-2 md:my-4">
                        Olá, sou Devanir, mineiro nascido no Vale do Jequitinhonha. Comunicador por formação e artista por essência. Construo minha trajetória na interseção entre criação, produção e conexão com o público. Atuo com produção audiovisual, com experiência em televisão, eventos e transmissões ao vivo. Tenho vivência em estúdios, roteirização, organização de gravações e desenvolvimento de conteúdos, sempre orientado pela construção coletiva e pela execução eficiente dos projetos.
                    </p>
                    <p className="mb-4 md:mb-8">
                        Sou bacharel em Rádio, TV e Internet pela Universidade Federal de Juiz de Fora (UFJF) e pós-graduando em Análise de Marketing pelo IF Sudeste. Minha formação é voltada à produção audiovisual, linguagem televisiva, roteiro e criação de conteúdos multiplataforma e storytelling, o que me permite transformar ideias em narrativas que conectam, engajam e se concretizam  da concepção à entrega.
                    </p>
                </div>
            </div>
        </section>
    )
}