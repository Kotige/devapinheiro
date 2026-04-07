import Scene from "@/components/Scene"
import Still from "@/components/Still"

// Banners
import muscle from "@/assets/images/banners/MUSCLE.png"
import rainbow from "@/assets/images/banners/RAINBOW.png"
import ampar from "@/assets/images/banners/AMPAR.png"
import havan from "@/assets/images/banners/HAVAN.png"


export default function Scenes() {
    return (
        <section id="scenes" className="">
            {/* Musclecontest */}
            <div>
                <Scene 
                index="01"
                title="MUSCLECONTEST"
                time="08:00"
                intExt="I"
                location="TV ALTEROSA/SBT TV INTEGRAÇÃO/GLOBO AGÊNCIA VESÚVIO/JF TRADE HOTEL/JF"
                content="Atuo há três anos consecutivos na construção e consolidação do Musclecontest, desenvolvendo um trabalho completo que integra produção audiovisual e estratégia de comunicação. Fui responsável pela criação, direção e execução do programa de TV do evento, exibido na TV Alterosa na grade do SBT nos anos de 2024 e 2025, acompanhando todas as etapas do processo, do planejamento à entrega final.  Além disso, o projeto também contou com inserções e produtos de mídia na grade da TV Integração/Globo, ampliando significativamente seu alcance e visibilidade. Paralelamente, conduzi a comunicação institucional do projeto, estruturando uma estratégia 360° que envolveu assessoria de imprensa, relacionamento com veículos e fortalecimento da presença midiática da marca. Entre as ações desenvolvidas, destacam-se o envio de releases, articulação de entrevistas e presença em emissoras de TV. Minha atuação envolveu ainda roteirização, organização de gravações e direcionamento criativo dos conteúdos, sempre com foco em posicionamento, visibilidade e conexão com o público."
                />
                <h2 className="uppercase my-6 text-center font-extralight">Still: Musclecontest</h2>
            </div>
            <Still src={muscle} alt="Muscle contest"/>
            {/* Rainbow Fest */}
            <div className="mt-16">
                <Scene 
                index="02"
                title="RAINBOWFEST BRASIL"
                time="10:00"
                intExt="E"
                location="PRAÇA ANTÔNIO CARLOS JUIZ DE FORA - MG"
                content="Atuei na produção do Rainbow Fest, sendo responsável pela concepção, roteirização e execução da transmissão ao vivo dos três dias de evento em 2025. Além de ficar responsável pela elaboração da campanha de prevenção às ISTS, como diferencial do projeto, propus a criação de uma cabine de vidro instalada no centro da praça, permitindo a realização das transmissões em meio ao público e à dinâmica do festival. A partir dessa ideia, conduzi a viabilização completa da estrutura, articulando os recursos necessários e garantindo sua execução. Durante o evento, atuei diretamente na produção das transmissões, organizando a dinâmica ao vivo, roteirização dos conteúdos e suporte à equipe, assegurando fluidez, integração com o público e qualidade na entrega. O projeto se destacou pela proposta inovadora, pela proximidade com o público e pela capacidade de transformar o ambiente do festival em um cenário ativo de produção audiovisual."
                />
                <h2 className="uppercase my-6 text-center font-extralight">Still: Musclecontest</h2>
            </div>
            <Still src={rainbow} alt="Rainbow Fest Brasil"/>
            {/* Ampar */}
            <div className="mt-16">
                <Scene 
                index="03"
                title="AMPAR 50 ANOS"
                time="11:30"
                intExt="I"
                location="TRADE HOTEL JUIZ DE FORA - MG"
                content="Atuei na produção do evento comemorativo de 50 anos da AMPAR (Associação do Municípios Microrregião Vale Paraibuna), sendo responsável pela articulação, planejamento e execução das frentes de comunicação, comercial e audiovisual. Conduzi a estratégia de relacionamento com veículos de comunicação, realizando o envio de releases e a negociação e articulação com emissoras de TV e rádio, o que garantiu ampla cobertura e visibilidade ao evento. No campo da produção, atuei na organização geral, acompanhamento das atividades e suporte à execução, com destaque para a implementação de uma palestra silenciosa, realizada simultaneamente às palestras principais, como solução inovadora para ampliar a experiência do público. Minha atuação integrou comunicação, produção e operação, assegurando o alinhamento entre as equipes, o cumprimento do cronograma e a qualidade da entrega final."
                />
                <h2 className="uppercase my-6 text-center font-extralight">Still: Musclecontest</h2>
            </div>
            <Still src={ampar} alt="Ampar 50 anos"/>
            {/* Havan */}
            <div className="mt-16">
                <Scene 
                index="04"
                title="MERCHANDISING EM TV"
                time="14:30"
                intExt="I"
                location="HAVAN TV ALTEROSA/SBT"
                content="Atuei na roteirização, produção e direção das ações de merchandising da Havan na TV Alterosa/SBT, integrando a campanha Alô, Gerente (2024 2025). Fui responsável por transformar os briefings enviados pela marca em roteiros audiovisuais alinhados ao branding e ao tom de voz da Havan, com foco em leveza, humor e apelo comercial. As ações foram desenvolvidas diretamente no ambiente de loja, explorando o espaço como cenário e elemento narrativo, com o objetivo de gerar identificação com o público e destacar os produtos de forma dinâmica e atrativa. Ao longo das campanhas, atuei na condução criativa e na direção das gravações, organizando a dinâmica entre apresentador, gerente e equipe, garantindo fluidez, timing televisivo e aderência à linguagem do programa. A atuação contribuiu para a construção de conteúdos comerciais mais dinâmicos e conectados com o público, unindo estratégia, criatividade e execução dentro do contexto televisivo."
                />
                <h2 className="uppercase my-6 text-center font-extralight">Still: Musclecontest</h2>
            </div>
            <Still src={havan} alt="Merchandising em TV"/>
        </section>
    )
}