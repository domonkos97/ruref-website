function MainArticle( {article, color} ) {
    return (
        <div className={`article flex flex-col justify-between h-full ${color}`}>
            <div className="title-picture">

                <div className={`p-4 ${color}`}>
                    <p className="font-bold title-container syne">
                        {article.title}
                    </p>
                    <p className="text-xs syne">
                        written by <span className="font-bold">Szabo. S Peter</span>
                    </p>
                </div>
            </div>
            <div className={`tag p-4 ${color}`}>
                <span className="syne border-x border-y border-black p-2 text-xs">
                    Category
                </span>
                <span className="syne border-x border-y border-black bg-black text-white p-2 text-xs">
                    Read More
                </span>
            </div>
            <div className={`tag ${color} p-4 text-right`}>
                <p className="syne">
                    {article.body}
                </p>
            </div>

        </div>
    );
}

export default MainArticle;