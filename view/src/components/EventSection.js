import {useEffect, useRef, useState} from "react";
import { gapi } from "gapi-script";

function EventSection( {events} ) {

    const calendarID = process.env.REACT_APP_CALENDAR_ID;
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;


    const eventRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState(false);
    let options = {
        threshold: 0.3,
    };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setMyElementIsVisible(true)
            } else {
                setMyElementIsVisible(false)
            }
        }, options);
        observer.observe(eventRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    console.log("new ", myElementIsVisible)
    return (
        <div className="flex bg-news" ref={eventRef}>
            <div className="h-5/6 w-5/6  m-auto py-28">
                <div className={`events-container flex flex-col justify-content bg-news ${myElementIsVisible ? 'events-float-up' : 'events'}`} ref={eventRef}>
                    <p className="text-center text-4xl syne overflow-hidden">Alkalmaink</p>

                    <hr className="h-px my-8 bg-gray-700 border-0"/>
                    <div className="events flex justify-between p-2">
                        <div className="event-items flex flex-col p-4">
                            {events.map((event) => (
                                <div key={event.id} className="event lg:block hidden lg:flex flex-row justify-between pb-8 items-end align-left ">
                                    <div className="w-60 mr-8 ">
                                        <p className="event-title text-black uppercase text-s cursor-pointer syne">{event.title}</p>
                                    </div>
                                    <div className="descriptions">
                                        <p className="event-description text-xl syne">{event.description}</p>
                                    </div>
                                    <div className="w-40 lg:text-right ml-8">
                                        <p className="event-description text-s syne uppercase bold">{event.date}</p>
                                    </div>
                                </div>


                            ))}
                            {events.map((event) => (
                                <div key={event.id} className="event-mobile lg:hidden lg:flex flex-row justify-between pb-8 items-end align-left ">
                                    <div className="w-full mr-8 ">
                                        <p className="event-title text-black uppercase text-s cursor-pointer syne inline text-s bolder">{event.title} | </p>
                                        <p className="event-description text-s syne uppercase bold inline text-s" >{event.date}</p>

                                    </div>
                                    <div className="w-40 lg:text-right ml-8">
                                    </div>
                                    <div className="descriptions">
                                        <p className="event-description text-xl syne flex-wrap">{event.description}</p>
                                    </div>
                                </div>


                            ))}
                        </div>

                    </div>
                    <hr className="h-px my-8 bg-gray-700 border-0 "></hr>
                </div>

            </div>
        </div>
    );

}

export default EventSection;