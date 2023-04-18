function NewsArticle( {article} ) {
    return (
        <div className="article border-x border-y border-black flex flex-col">
            <div className="title border-b  border-black p-4">
                <p className="font-bold title-container syne">
                    {article.title}
                </p>
                <p className="text-xs syne">
                    written by <span className="font-bold text-xs">Szabo S. Peter</span>
                </p>
            </div>
            <div className="tag border-b border-black flex-grow p-4 ">
                <p className="syne">
                    {article.body}
                </p>
            </div>
            <div className="tag px pl-4 flex justify-between" >
                <p className="syne text-s">
                    Category
                </p>
                <p className="bg-black text-white px-4 text-s">read more...</p>
            </div>
        </div>
    );
}

export default NewsArticle;