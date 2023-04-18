
function Menu( {isVisible} ) {
    return (
        <div className={`menu-container ${isVisible ? "show" : "hidden"} flex flex-row gap-28`}>
            <div className="event-section ">
                <div className="menu-title">
                    <p className="text-xs font-bold syne events-menu-title">EVENTS</p>
                </div>
                <ul className="dot">
                    <li className="text-lg syne text-gray-400  hover:text-black cursor-pointer">calendar</li>
                    <li className="text-lg syne text-gray-400 hover:text-black cursor-pointer">urvacsorak rendje</li>
                    <li className="text-lg syne text-gray-400 hover:text-black cursor-pointer">evkozi kirandulasok</li>
                    <li className="text-lg syne text-gray-400 hover:text-black cursor-pointer">kids events</li>
                    <li className="text-lg syne text-gray-400 hover:text-black cursor-pointer">summer camps</li>
                </ul>
            </div>
            <div className="helpers-section">
                <div className="menu-title ">
                    <p className="text-xs font-bold syne helpers-menu-title">HELPERS</p>
                </div>
                <ul className="dot">
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">kantorok</li>
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">presbiterium</li>
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">muszaki bizottsag</li>
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">marta kor</li>
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">korus</li>
                </ul>
            </div>
            <div className="info-section">
                <div className="menu-title">
                    <p className="text-xs font-bold syne info-menu-title">INFO</p>
                </div>
                <ul className="dot">
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">news</li>
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">blog</li>
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">igehirdetesek</li>
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">kolumbarium</li>
                    <li className="text-lg  syne text-gray-400 hover:text-black cursor-pointer">weddings</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;