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
            'title': "temetési istentisztelet",
            'date': "29 március 2023",
            'description': "Demeter Béláné temetése lesz 6 órakor az Arany János utcai templomban",
            'id': 1
        },
        {
            'title': "nyugdijasok biblióáraja",
            'date': "31 március 2023",
            'description': "11 órakor a Gyülekezeti teremben",
            'id': 2
        },
        {
            'title': "kóruspróba",
            'date': "1 április 2023",
            'description': "Minden szombaton 6 órakor a Gyülekezeti teremben",
            'id': 3
        },
        {
            'title': "virágvasárnapi istentisztelet",
            'date': "2 április 2023",
            'description': "Jézusnak diadalmas jeruzsálemi bevonulására emlékezünk",
            'id': 4
        },
        {
            'title': "nagyheti előkészitő",
            'date': "4 április 2023",
            'description': "Minden hétköznap, nagypéntekig bezarólag a gyülekezeti teremben",
            'id': 1
        },
        {
            'title': "nagypénteki istentisztelet",
            'date': "7 április 2023",
            'description': "Emlekezzünk együtt Jézus kereszthalálára, pénteken 10 órakor az Arany János utcai templomban",
            'id': 2
        },
        {
            'title': "kóruspróba",
            'date': "8 április 2023",
            'description': "Minden szombaton 6 órakor a Gyülekezeti teremben",
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
