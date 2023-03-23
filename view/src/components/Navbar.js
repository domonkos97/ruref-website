import {useState} from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className="navbar flex justify-between items-center z-2">

            <div className="menu flex justify-between text-s">
                <div className="p-3 hover:underline cursor-pointer">Bio</div>
                <div className="p-3 hover:underline cursor-pointer">Contact</div>
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
