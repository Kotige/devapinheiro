import Header from "./Header"
import About from "./About"
import Scenes from "./Scenes"

export default function Home() {
    return (
        <main className="bg-black py-20 lg:py-25 px-6 lg:px-60"> 
            <Header />
            <About />
            <Scenes />
        </main>
    )
}