import Navbar from "./Navbar";
import TitleCard from "./TitleCard";
import {useEffect, useRef, useState} from "react";
import Menu from "./Menu";

function Hero( {setMyHomeElementIsVisible, setIsMenuOpen, isMenuOpen} ) {
    const heroRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState(false);
    let options = {
        threshold: 0.7,
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=> {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting);
            if (!entry.isIntersecting) {
                setMyHomeElementIsVisible(true)
            }else {
                setMyHomeElementIsVisible(false)
            }
        }, options)
        observer.observe(heroRef.current)
    }, [])
    return (
        <div className={`hero-section h-screen flex flex-col justify-between px-12 lg:px-28 pt-28 bg-default ${
                !myElementIsVisible && 'bg-news' 
            } transition-colors duration-1000`} ref={heroRef} >
            <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} myElementIsVisible={myElementIsVisible}/>
            <div className="flex flex-row justify-between items-center pr-28">
                <TitleCard isVisible={myElementIsVisible}/>
                <Menu isVisible={myElementIsVisible}/>
            </div>
            <div>
                <i className="fa-solid fa-angle-down mb-12"></i>
            </div>

        </div>
    );
}

export default Hero;
