import Hero from "../components/Hero";
import NewsSection from "../components/NewsSection";
import EventSection from "../components/EventSection";
import {useState} from "react";
function Home( {news, events, setIsMenuOpen, isMenuOpen} ) {
    const [myHomeElementIsVisible, setMyHomeElementIsVisible] = useState(true)

    return (
        <div>
            <Hero setMyHomeElementIsVisible={setMyHomeElementIsVisible} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
            <NewsSection news={news} myHomeElementIsVisible={myHomeElementIsVisible}/>
            <EventSection events={events}/>
        </div>
    );

}


export default Home