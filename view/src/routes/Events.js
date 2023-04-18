import { google } from 'googleapis';

function Events(){
    const calendar = google.calendar({
        version: 'v3',
        auth: '304776148305-idudq6qapseanaarinma68u9uebos8rj.apps.googleusercontent.com', // Replace with your OAuth2 token
    });

    async function getNext10Events() {
        const calendarId = 'szabo.domonkos97@gmail.com'; // Replace with your calendar ID
        const response = await calendar.events.list({
            calendarId,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
        });

        const events = response.data.items;
        console.log(events);
    }
}

export default Events;

