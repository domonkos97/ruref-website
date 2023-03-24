function NewsArticle( {article} ) {
    return (
        <div>
            <img className="picture" src={article.photo} alt="photo"></img>
        </div>
    )
}

export default NewsArticle;