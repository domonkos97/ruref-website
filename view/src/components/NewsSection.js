import NewsTitleCard from "./NewsTitleCard";
import NewsArticle from "./NewsArticle";
import {useEffect, useRef, useState} from "react";

function NewsSection({ news }) {
    const myRef = useRef();
    const picturesRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState(false);
    let options = {
        threshold: 0.3,
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.intersectionRatio >= 0.3 && !myElementIsVisible) {
                setMyElementIsVisible(true);
                console.log(window.scrollY)
                console.log(true)
            } else if (window.scrollY < 1000) {
                setMyElementIsVisible(false);
                console.log(window.scrollY)
                console.log(false)
            }
        }, options);
        observer.observe(myRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);



    return (
        <div
            className="news-section flex flex-col items-center z-0 justify-center h-screen p-28 z-0"
            ref={myRef}
        >
            <div className={`content ${myElementIsVisible ? "show" : "hidden"}`} >
                <div className="pictures flex gap-2 mb-2">
                    {news.slice(0, 1).map((article) => (
                        <NewsArticle article={article} data="one"></NewsArticle>
                    ))}
                    {news.slice(1, 2).map((article) => (
                        <NewsArticle article={article} data="two"></NewsArticle>
                    ))}

                </div>

                <div className="pictures flex justify-between h-contain w-contain gap-2 mb-2" ref={picturesRef}>
                    {news.slice(2, 3).map((article) => (
                        <NewsArticle article={article} data="three"></NewsArticle>
                    ))}
                    {news.slice(3, 4).map((article) => (
                        <NewsArticle article={article} data="four"></NewsArticle>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsSection;