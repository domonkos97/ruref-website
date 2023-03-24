import NewsTitleCard from "./NewsTitleCard";
import NewsArticle from "./NewsArticle";
import {useEffect, useRef, useState} from "react";

function NewsSection({ news }) {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState(false);
    let options = {
        threshold: 0.3,
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.intersectionRatio >= 0.3 && !myElementIsVisible) {
                setMyElementIsVisible(true);
            } else  {
                setMyElementIsVisible(false);
            }
        }, options);
        observer.observe(myRef.current);

        // cleanup observer on component unmount
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className="news-section flex flex-col items-center justify-center h-screen p-28 z-0"
            ref={myRef}
        >
            <div className={`content ${myElementIsVisible ? "show" : "hidden"}`}>
                <NewsTitleCard isVisible={myElementIsVisible} />
                <div className="pictures flex">
                    {news.slice(0, 1).map((article) => (
                        <NewsArticle article={article}></NewsArticle>
                    ))}
                    {news.slice(0, 1).map((article) => (
                        <NewsArticle article={article}></NewsArticle>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsSection;