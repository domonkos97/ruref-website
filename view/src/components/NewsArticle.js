function NewsArticle( {article, data, onMouseLeave, onMouseEnter, isHovered} ) {
    return (
        <div className={`picture-container z-2 w-full pb-12 md:pb-0`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <img className={`picture ${data} ${isHovered ? 'transformed-image duration-500 ease-in-out' : 'duration-500 ease-in-out'}`} src={article.photo} alt="photo"></img>
            <div className="title-body-news flex justify-between">
            </div>
        </div>
    );
}

export default NewsArticle;