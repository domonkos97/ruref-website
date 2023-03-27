function TitleCards( {isVisible} ) {
    return (
        <div className={`title flex flex-col justify-center items-end z-0 ${isVisible ? 'show': 'hidden'}`}>
            <p className="text-3xl font-sans red-text-color">Rákospalota Újvárosi Református Gyülekezet</p>
            {/*<p className="big-text font-black red-text-color">RUREF</p>*/}
        </div>
    );
}

export default TitleCards;
