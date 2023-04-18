function NewsArticle( {article} ) {
    return (
        <div className="article border-2">
            <div className="title border-2">
                <p>
                    {article.title}
                </p>
                <p>
                    written by {article.author}
                </p>
            </div>
            <div className="body border-2">
                <p>
                    {article.body}
                </p>
            </div>
            <div className="tag border-2">
                <p>
                    {article.title}
                </p>
            </div>
        </div>
    );
}

export default NewsArticle;