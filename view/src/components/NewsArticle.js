function NewsArticle( {article} ) {
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </div>
    )
}

export default NewsArticle;