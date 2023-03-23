import Hero from "../components/Hero";
import NewsSection from "../components/NewsSection";
function Home() {
    return (
        <div>
            <div className="bg-white w-full h-20 fixed z-1"></div>
            <Hero />
            <div className="h-8"></div>
            <NewsSection/>
        </div>
    );

}


export default Home