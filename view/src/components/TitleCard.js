function TitleCards( {isVisible} ) {
    return (
        <div className={`title flex flex-col justify-center pointer-none items-center z-0 ${isVisible ? 'show': 'hidden'}`}>
            <div className="relative h-fit">
                <p className="lg:text-3xl md:text-xl md:block hidden font-sans grey-text-color  text-center  tracking-widest absolute left-0">Rákospalota Újvárosi </p>
                <p className="lg:text-3xl md:text-xl md:block hidden font-bold font-sans grey-text-color  text-center tracking-wide absolute right-0">Református Gyülekezet </p>
                <p className="ruref-text big-text syne font-black double-text-color text-center tracking-wide leading-none">ruref 1152</p>

            </div>
        </div>
    );
}

export default TitleCards;
