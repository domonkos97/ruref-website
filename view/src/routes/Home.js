import Socials from "../components/Socials";
import TitleCard from "../components/TitleCard";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div className="hero-section h-screen flex flex-col justify-between p-10">
            <Navbar/>
            <TitleCard />
            <Socials />
        </div>
    )
}

export default Home