import Socials from "../components/Socials";
import TitleCard from "../components/TitleCard";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div className="hero-section h-screen bg-red-50 flex flex-col justify-between">
            <Navbar/>
            <TitleCard />
            <Socials />
        </div>
    )
}

export default Home