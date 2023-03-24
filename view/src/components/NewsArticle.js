function NewsArticle( {article} ) {
    return (
        <div className="picture-container">
            <img className="picture" src={article.photo} alt="photo"></img>
            <div className="title-news">{article.title}</div>
        </div>
    );

}

export default NewsArticle;