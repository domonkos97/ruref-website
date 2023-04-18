import NewsArticle from "./NewsArticle";
import {useEffect, useRef, useState} from "react";

function NewsSection({ news, myHomeElementIsVisible }) {
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
            } else if (window.scrollY < 1000) {
                setMyElementIsVisible(false);
            }
        }, options);
        observer.observe(myRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);




    return (
        <div
            className={`news-section flex  flex-col items-center justify-center p-28 bg-default transition-colors duration-1000
                        ${myHomeElementIsVisible && 'bg-news'}
                        `}
            ref={myRef}
        >
            <div className={`news-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
                             ${myElementIsVisible ? 'show' : 'hidden'}
                            `}>
                {news.map((article) => (
                    <NewsArticle article={article}>
                    </NewsArticle>
                ))}

            </div>
        </div>
    );
}


export default NewsSection;