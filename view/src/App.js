import React from 'react';
import './App.css';
import Home from "./routes/Home";
import {useEffect, useState} from "react";
function App() {
    const [news, setNews] = useState([])
    const getApi = async (url) => {
        let response = await fetch(url)
        let data =  await response.json()
        setNews([...data])
    }
    useEffect(() => {
        getApi("/api/news").catch(console.error)
    }, [])

    const events = [
        {
            'title': "Bach koncert",
            'date': "25 augusztus 2023",
            'description': "Aza rany Janos utca templomban.",
            'id': 1
        },
        {
            'title': "istentisztelet a MÁV-telepen",
            'date': "27 szeptember 2023",
            'description': "A szokott rend szerint.",
            'id': 2
        },
        {
            'title': "gyermekistentisztelet",
            'date': "2 november 2023",
            'description': "Ahogy azt kell.",
            'id': 3
        },
        {
            'title': "istentisztelet az Arany János utcában",
            'date': "11 februar 2024",
            'description': "Minden vasarnap.",
            'id': 4
        },
        {
            'title': "Kirandulas",
            'date': "8 marcius 2024",
            'description': "ide verek oda verek, itt vannak a puloverek",
            'id': 1
        },
        {
            'title': "Summer Camp",
            'date': "8 marcius 2024",
            'description': "This scooby doo themed camp will be fun for the kids.",
            'id': 2
        },
        {
            'title': "An event in the far future",
            'date': "8 marcius 2024",
            'description': "The year is 2066 and earth is uninhabitable.",
            'id': 3
        },
    ]



    return (
        <>
            <Home news={news} events={events}></Home>
        </>
    );
}

export default App;
