import React from 'react';

function FullscreenMenu( {setIsMenuOpen} ) {
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className="menu-overlay">
            <div className="fullscreen-menu p-60 flex justify-between items-center border-t-2 border-black ">
                <div>
                    <ul className="flex flex-row gap-8 border-t-2 border-b-2 border-black p-2">
                        <li><a href="/">Home</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>

                <div className="text-right ">
                    <h1 className="text-3xl pb-2">Ruref</h1>
                    <p className="text-sm font-bold">06 30 123 4567</p>
                    <p className="text-sm font-bold">example@email.com</p>
                    <p className="text-sm pt-2">Check out the <span className="underline">youtube</span> <br/>and <span className="underline">facebook</span> channels</p>
                </div>
            </div>
        </div>
    );
}

export default FullscreenMenu;