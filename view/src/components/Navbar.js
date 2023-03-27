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
        <div className="h-40px"></div>
        <div className={`navbar flex justify-between items-center z-2 fixed w-full pr-56  ${isScrolled ? 'hidden' : ''} fixed w-full`}>

            <div className="menu flex justify-between text-s ">
                <div className="p-3 hover:underline cursor-pointer dm-sans">Rólunk</div>
                <div className="p-3 hover:underline cursor-pointer dm-sans">Elérhetőségek</div>
            </div>
            <div  className={`hamburger h-5 w-5 flex flex-col justify-center items-end cursor-pointer ${
                isOpen ? 'open' : ''
            }`} onClick={handleClick}>
                <span className="bar h-1 w-10 bg-black mb-1"></span>
                <span className="bar h-1 w-6 bg-black"></span>
            </div>
        </div>
        </>
    );
}

export default Navbar;
