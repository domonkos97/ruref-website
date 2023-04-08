import Hero from "../components/Hero";
import NewsSection from "../components/NewsSection";
import EventSection from "../components/EventSection";
import {useState} from "react";
function Home( {news, events} ) {
    const [myHomeElementIsVisible, setMyHomeElementIsVisible] = useState(true)

    return (
        <div>
            <Hero setMyHomeElementIsVisible={setMyHomeElementIsVisible} />
            <NewsSection news={news} myHomeElementIsVisible={myHomeElementIsVisible}/>
            <EventSection events={events}/>
        </div>
    );

}


export default Home