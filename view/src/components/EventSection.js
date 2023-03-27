import {useEffect, useRef, useState} from "react";

function EventSection( {events} ) {
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
                    <p className="text-center text-4xl syne">Alkalmaink</p>

                    <hr className="h-px my-8 bg-gray-700 border-0"/>
                    <div className="events flex justify-between p-2">
                        <div className="event-items flex flex-col p-4">
                            {events.map((event) => (
                                <div key={event.id} className="event flex flex-row justify-between pb-8 items-end align-left ">
                                    <div className="w-60">
                                        <p className="event-title text-black uppercase text-s cursor-pointer syne">{event.title}</p>
                                    </div>
                                    <div className="descriptions">
                                        <p className="event-description text-xl syne">{event.description}</p>
                                    </div>
                                    <div className="w-40 text-right">
                                        <p className="event-description text-s syne uppercase bold">{event.date}</p>
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