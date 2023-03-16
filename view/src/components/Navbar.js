import {useState} from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="navbar flex flex-col items-end h-20">
            <div  className={`hamburger h-20 w-20 flex flex-col justify-center items-end ${
                isOpen ? 'open' : ''
            }`} onClick={handleClick}>
                <span className="bar h-1 w-12 bg-black mb-1"></span>
                <span className="bar h-1 w-8 bg-black"></span>
            </div>
        </div>
    );
}

export default Navbar;
