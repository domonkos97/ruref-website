import Navbar from "./Navbar";
import TitleCard from "./TitleCard";
import {useEffect, useRef, useState} from "react";

function Hero( {setMyHomeElementIsVisible} ) {
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
            <Navbar />
            <TitleCard isVisible={myElementIsVisible}/>
        </div>
    );
}

export default Hero;
