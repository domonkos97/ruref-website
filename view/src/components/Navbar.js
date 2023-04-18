import {useEffect, useState} from "react";

function Navbar( {setIsMenuOpen, isMenuOpen, myElementIsVisible} ) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    useEffect(() => {
        function handleScroll() {
            // keep current scroll position
            let currentScroll = window.scrollY;
            console.log(currentScroll)
            if (currentScroll === 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            setPrevScrollPos(currentScroll)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        if (isMenuOpen) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "visible";
        }
    }, [isMenuOpen]);

    return (
        <>
            <div className={`bg-default h-28 fixed w-full left-0 top-0 z-10 ${
                !myElementIsVisible && 'bg-news opacity-0'
            } transition-colors duration-1000`}></div>
            <div className={`navbar flex justify-center sm:justify-between items-center  z-0 w-full pr-28 pl-28 `}>
                <div  className="logo-container">
                    <span className="logo-spac"><a href="/about" className="logo">LOGO</a></span>
                </div>
                <div className={`menu flex justify-between text-s gap-12 `}>
                    <div className="hidden sm:block p-3 pl-0 lg:pl-3  syne hover:text-gray-400 cursor-pointer dm-sans ">Bejelenkezés</div>
                    <div className="hidden sm:block p-3 hover:text-gray-400  syne cursor-pointer dm-sans">Elérhetőségek</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
