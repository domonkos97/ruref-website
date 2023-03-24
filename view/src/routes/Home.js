import Hero from "../components/Hero";
import NewsSection from "../components/NewsSection";
function Home( {news} ) {
    return (
        <div>
            <Hero />
            <NewsSection news={news}/>
            <div className=" flex h-screen">
                <p className="m-auto">Events</p>
            </div>
        </div>
    );

}


export default Home