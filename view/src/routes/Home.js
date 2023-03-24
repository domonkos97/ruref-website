import Hero from "../components/Hero";
import NewsSection from "../components/NewsSection";
function Home( {news} ) {
    return (
        <div>
            <Hero />
            <NewsSection news={news}/>
            <div className="h-screen">
                <p>Next Section</p>
            </div>
        </div>
    );

}


export default Home