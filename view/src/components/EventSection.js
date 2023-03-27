function EventSection( {events} ) {
    return (
        <div className=" flex bg-news">
            <div className="h-4/5 w-4/5  m-auto py-28">
                <div className="events-container">
                    <hr className="h-px my-8 bg-gray-700 border-0"></hr>
                    <div className="events flex justify-between p-2">
                        <p className="event-title text-2xl uppercase">Upcoming Events</p>
                        <div className="event-items flex flex-col p-4">
                            {events.map((event) => (
                                <div key={event.id} className="event flex flex-row justify-between pb-8 items-end align-left ">
                                    <div className="w-60">
                                        <p className="event-title text-black uppercase text-xs cursor-pointer ">{event.title}</p>
                                    </div>
                                    <div className="descriptions">
                                        <p className="event-description text-l">{event.description}</p>
                                    </div>
                                    <div className="w-40 text-right">
                                        <p className="event-description text-xs uppercase bold">{event.date}</p>
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