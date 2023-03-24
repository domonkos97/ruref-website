import NewsTitleCard from "./NewsTitleCard";
import {useEffect, useRef, useState} from "react";
import NewsArticle from "./NewsArticle";

function NewsSection( {news}) {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState(false);
    let options = {
        threshold: 0.3,
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=> {
            const entry = entries[0]
            if (myElementIsVisible === false) {
                setMyElementIsVisible(entry.isIntersecting);
            }
        }, options)
        observer.observe(myRef.current)
    }, [])

    return (
        <div className="news-section flex flex-col items-center justify-center h-screen p-28 z-0" ref={myRef}>
            <div className={`content ${myElementIsVisible ? "show" : "hidden"}`}>
                <NewsTitleCard isVisible={myElementIsVisible} />
                <div className="pictures">
                    {news.slice(0, 1).map((article) => (
                        <NewsArticle article={article}></NewsArticle>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default NewsSection;
