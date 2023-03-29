function TitleCards( {isVisible} ) {
    return (
        <div className={`title flex flex-col justify-center items-center z-0 ${isVisible ? 'show': 'hidden'}`}>
            <div className="relative">
                {/*<div className="line secondary-bg-color w-full h-2 absolute -top-4"></div>*/}
                {/*<div className="text w-6/7">*/}
                {/*    <p className="text-3xl font-sans grey-text-color  text-center tracking-widest">Rákospalota Újvárosi </p>*/}
                {/*    <p className="text-3xl font-bold font-sans grey-text-color  text-center tracking-wide">Református Gyülekezet </p>*/}
                {/*</div>*/}
                {/*<div className="line secondary-bg-color w-full h-2 absolute -bottom-4"></div>*/}
            </div>
            <div className="relative">
                <p className="text-2xl font-sans grey-text-color  text-center tracking-widest absolute top-28 left-0">Rákospalota Újvárosi </p>
                <p className="text-2xl font-bold font-sans grey-text-color  text-center tracking-wide absolute top-28 right-0">Református Gyülekezet </p>
                <p className="big-text syne font-black double-text-color text-center tracking-wide ">ruref 1152</p>

            </div>
        </div>
    );
}

export default TitleCards;
