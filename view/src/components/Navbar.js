import {useEffect, useState} from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        function handleScroll() {
            // keep current scroll position
            let currentScroll = window.scrollY;
            if (currentScroll > prevScrollPos && currentScroll > 130) {
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
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className=""></div>
        <div className={`navbar flex  sm:justify-between justify-end items-center z-10 fixed w-full pr-28 pl-28 ${isScrolled ? 'hidden' : ''} fixed`}>

            <div className="menu flex justify-between text-s ">
                <div className="hidden sm:block p-3 pl-0 lg:pl-3 hover:underline cursor-pointer dm-sans">Rólunk</div>
                <div className="hidden sm:block p-3 hover:underline cursor-pointer dm-sans">Elérhetőségek</div>
            </div>
            <div  className={`hamburger h-16 w-16 flex flex-col justify-center items-end cursor-pointer ${
                isOpen ? 'open' : ''
            }`} onClick={handleClick}>
                <span className="bar bar-top h-1 w-10 bg-black mb-1"></span>
                <span className="bar h-1 w-6 bg-black"></span>
            </div>
        </div>
        </>
    );
}

export default Navbar;
