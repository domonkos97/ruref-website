import NewsArticle from "./NewsArticle";

function NewsSection( {news} ) {
    return (
        <div>
            {news.map((article) => (
                <NewsArticle article={article}></NewsArticle>
            ))}
        </div>
    )
}

export default NewsSection;