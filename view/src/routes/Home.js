import Hero from "../components/Hero";
import NewsSection from "../components/NewsSection";
import EventSection from "../components/EventSection";
function Home( {news, events} ) {
    return (
        <div>
            <Hero />
            <NewsSection news={news}/>
            <EventSection events={events}/>
        </div>
    );

}


export default Home