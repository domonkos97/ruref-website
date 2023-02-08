import './App.css';
import Home from "./routes/Home";
import {useEffect, useState} from "react";

function App() {
    const [news, setNews] = useState(null)

    const getApi = async (url) => {
        let response = await fetch(url)
        let data = response.json()
        setNews(data)
    }
    useEffect(() => {
        getApi("/route/to/api").catch(console.error)
    }, [])



    return (
    <Home news={news}></Home>
    );
}

export default App;
