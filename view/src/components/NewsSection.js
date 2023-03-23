import NewsTitleCard from "./NewsTitleCard";
import {useEffect, useRef, useState} from "react";
import NewsArticle from "./NewsArticle";

function NewsSection( {news}) {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState(false);
    let options = {
        threshold: 0.5,
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=> {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting);
        }, options)
        observer.observe(myRef.current)
    }, [])

    return (
        <div className="news-section h-screen z-0" ref={myRef}>
            <NewsTitleCard isVisible={myElementIsVisible}/>
            <div className="flex justify-center p-50 z-0  m-auto">
                <p className={`news-title z-0 text-5xl m-auto ${myElementIsVisible ? "show" : "hidden"}`}>News</p>
            </div>
            {news.map((article) => (
        <NewsArticle article={article}></NewsArticle>
      ))}
        </div>
    );
}

export default NewsSection;
