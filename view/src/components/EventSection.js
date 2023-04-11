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

    let gapi = window.gapi;
    const CLIENT_ID =  "304776148305-idudq6qapseanaarinma68u9uebos8rj.apps.googleusercontent.com"
    const API_KEY = "AIzaSyC7bYBHOTBUdI3ATqnmkBp_fcllGxlQSwU"
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    const SCOPES = "https://www.googleapis.com/auth/calendar.events"


    function handleClick() {
        gapi.load('client:auth2', () => {
            console.log("client loaded")
            gapi.auth2.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scopes: SCOPES,
                plugin_name: "plugin"
            })
            gapi.client.load('calendar', 'v3', () => console.log("bam"))
            gapi.auth2.getAuthInstance().signIn({ prompt: 'consent' })
                .then(()=> {
                    var event = {
                        'summary': 'Awesome Event!',
                        'location': '800 Howard St., San Francisco, CA 94103',
                        'description': 'Really great refreshments',
                        'start': {
                            'dateTime': '2020-06-28T09:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                            'dateTime': '2020-06-28T17:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'recurrence': [
                            'RRULE:FREQ=DAILY;COUNT=2'
                        ],
                        'attendees': [
                            {'email': 'lpage@example.com'},
                            {'email': 'sbrin@example.com'}
                        ],
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                {'method': 'email', 'minutes': 24 * 60},
                                {'method': 'popup', 'minutes': 10}
                            ]
                        }
                    }
                    let request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event
                    })

                    request.execute(event => {
                        window.open(event.htmlLink)
                    })
                })
        })
    }

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
            <div>
                <button onClick={handleClick}>Click Me for Events</button>
            </div>
        </div>
    );

}

export default EventSection;