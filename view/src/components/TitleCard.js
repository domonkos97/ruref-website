function TitleCards( {isVisible} ) {
    return (
        <div className={` ${isVisible ? 'show': 'hidden'} pr-28 pl-28` }>
            <div >
                <p className="ruref- syne text text-lg double-text-color text-left tracking-wide"><span className="">   RUREF, </span> a Rákospalota Újvárosi <br/> Református Gyülekezet <br/> honlapja.</p>

            </div>
        </div>
    );
}

export default TitleCards;
