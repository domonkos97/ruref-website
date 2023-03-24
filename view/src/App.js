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



    return (
        <>
            <Home news={news}></Home>
        </>
    );
}

export default App;
