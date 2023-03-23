function NewsArticle( {article} ) {
    return (
        <div>
            <h3>{article.title}</h3>
            <img src={article.photo} alt="photo"></img>
        </div>
    )
}

export default NewsArticle;