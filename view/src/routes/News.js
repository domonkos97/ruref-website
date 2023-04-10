import React, { useState, useEffect } from "react";

function Home({ news }) {
    const [sortedNews, setSortedNews] = useState(news);
    const [sortOrder, setSortOrder] = useState("newest"); // newest or oldest
    console.log("news: ", news)

    useEffect(() => {
        sortNewsByDate(sortOrder)
    }, [])

    useEffect(() => {
        console.log("change")
        sortNewsByDate(sortOrder);
    }, [sortOrder, sortedNews]);

    const sortNewsByDate = (order) => {
        const sorted = [...news].sort((a, b) => {
            const dateA = new Date(a.dateOfArticle);
            const dateB = new Date(b.dateOfArticle);
            console.log(dateA)
            console.log(dateB)
            return order === "newest" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
        });
        console.log(sorted)
        setSortedNews(sorted);
    };

    const handleClick = () => {
        console.log("click")
        const newOrder = sortOrder === "newest" ? "oldest" : "newest";
        setSortOrder(newOrder);
        console.log(sortOrder)
    };

    return (
        <div className="p-28">
            <button className="border-2 p-2 rounded-lg" onClick={handleClick}>
                {sortOrder === "newest" ? "Newest" : "Oldest"}
            </button>
            {sortedNews.map((article) => (
                <div key={article.id}>
                    <br />
                    <p> {article.title} </p>
                    <p> {article.body} </p>
                    <p> {article.date} </p>
                    <p> {article.dateOfArticle} </p>
                </div>
            ))}
        </div>
    );
}

export default Home;

