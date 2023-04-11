import NewsArticle from "./NewsArticle";
import {useEffect, useRef, useState} from "react";

function NewsSection({ news, myHomeElementIsVisible }) {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave = () => {
        setIsHovered1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };

    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };

    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };


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
            <div className={`news-content 
                             ${myElementIsVisible ? 'show' : 'hidden'}
                            `}>
                <div className="pictures grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        {news.slice(0, 1).map((article) => (
                            <NewsArticle article={article}
                                         data="one"
                                         onMouseEnter={handleMouseEnter}
                                         onMouseLeave={handleMouseLeave}
                                         isHovered={isHovered1}>
                            </NewsArticle>
                        ))}
                    </div>
                    <div>
                        {news.slice(1, 2).map((article) => (
                            <NewsArticle article={article}
                                         data="two"
                                         onMouseEnter={handleMouseEnter2}
                                         onMouseLeave={handleMouseLeave2}
                                         isHovered={isHovered2}>
                            </NewsArticle>
                        ))}
                    </div>
                    <div className="hover:cursor-pointer duration-500 ease-in-out hidden md:inline"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                        {news.slice(0, 1).map((article) => (
                            <div className="flex flex-col justify-between h-full">
                                <div className={`body-news syne text-gray-300
                                                 `}><p className={` syne ${isHovered1 ? 'transformed duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} >{article.body} </p>
                                </div>
                                <div className="title-news syne text-gray-400"><p className={` syne ${isHovered1 ? 'transformed duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} >{article.title} </p></div>
                            </div>
                        ))}
                    </div>
                    <div className="hover:cursor-pointer duration-500 ease-in-out hidden md:inline" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        {news.slice(1, 2).map((article) => (
                            <div className="flex flex-col justify-between h-full">
                                <div className={`transform-this body-news syne text-gray-300`}> <p className={` syne ${isHovered2 ? 'transformed duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} >{article.body} </p> </div>
                                <div className="title-news syne text-gray-400 "><p className={` syne ${isHovered2 ? 'transformed duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} >{article.title} </p></div>
                            </div>
                            ))}
                    </div>
                    <div className="lg:row-start-2 lg:col-start-3">
                        {news.slice(2, 3).map((article) => (
                            <NewsArticle article={article} data="three" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} isHovered={isHovered3}></NewsArticle>
                        ))}
                    </div>
                    <div  className="lg:row-start-2 lg:col-start-4">
                        {news.slice(3, 4).map((article) => (
                            <NewsArticle article={article} data="four" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} isHovered={isHovered4}></NewsArticle>
                        ))}
                    </div>
                    <div className="hover:cursor-pointer lg:row-start-2 lg:col-start-1 duration-500 ease-in-out hidden md:inline" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                        {news.slice(2, 3).map((article) => (
                            <div className="flex flex-col justify-between h-full">
                                <div className="title-news-right syne text-gray-400"><p className={` syne ${isHovered3 ? 'transformed duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} >{article.title} </p></div>
                                <div className={`transform-this ${isHovered3 ? 'transformed-up duration-500 ease-in-out' : 'duration-500 ease-in-out'} body-news-left syne text-gray-300`}><p className={` syne ${isHovered3 ? 'transformed duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} >{article.body} </p></div>
                            </div>
                        ))}
                    </div>
                    <div className="hover:cursor-pointer lg:row-start-2 lg:col-start-2 duration-500 ease-in-out hidden md:inline" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                        {news.slice(3, 4).map((article) => (
                            <div className="flex flex-col justify-between h-full">
                                <div className="title-news-right syne text-gray-400"><p className={` syne ${isHovered4 ? 'transformed duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} >{article.title} </p></div>
                                <div className={`transform-this ${isHovered4 ? 'transformed-up duration-500 ease-in-out' : 'duration-500 ease-in-out'} body-news-left syne text-gray-300`}><p className={` syne ${isHovered4 ? 'transformed duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} >{article.body} </p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NewsSection;