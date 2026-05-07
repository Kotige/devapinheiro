import Header from "./Header"
import About from "./About"
import ProdDoc from "@/components/ProdDoc"
import Scenes from "./Scenes"
import AudioVisual from "./AudioVisual"
import Footer from "./Footer"

export default function Home() {
    return (
        <main className="bg-black py-20 lg:py-25 px-6 lg:px-60"> 
            <Header />
            <About />
            <ProdDoc />
            <Scenes />
            <AudioVisual />
            <Footer />
        </main>
    )
}