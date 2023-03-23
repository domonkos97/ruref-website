function TitleCards( {isVisible} ) {
    return (
        <div className={`title flex flex-col justify-center items-end z-0 ${isVisible ? 'show': 'hidden'}`}>
            <p className="text-3xl font-sans">Rákospalota Újvárosi Református Gyülekezet</p>
            <p className="text-9xl font-black">RUREF</p>
        </div>
    );
}

export default TitleCards;
