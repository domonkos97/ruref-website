function NewsArticle( {article, data} ) {
    return (
        <div className="picture-container">
            <img className={`picture ${data}`} src={article.photo} alt="photo"></img>
            <div className="title-body-news flex justify-between">
                <div className="title-news">{article.title}</div>
                <div className="body-news">{article.body}</div>
            </div>
        </div>
    );

}

export default NewsArticle;