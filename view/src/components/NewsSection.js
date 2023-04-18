import NewsArticle from "./NewsArticle";
import {useEffect, useRef, useState} from "react";
import MainArticle from "./MainArticle";

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
                <div className="col-start-1 row-start-1 row-end-1 col-end-3">
                    {news.slice(1, 2).map((article) => (
                        <MainArticle article={article} color="bg-1"/>
                    ))}
                </div>
                <div className="col-start-1 row-start-2 row-end-2 col-end-3">
                    {news.slice(0, 1).map((article) => (
                        <MainArticle article={article} color="bg-2"/>
                    ))}
                </div>
                {news.map((article) => (
                    <NewsArticle article={article}/>
                ))}

            </div>
        </div>
    );
}


export default NewsSection;