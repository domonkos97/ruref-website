import NewsSection from "../components/NewsSection";

function Home( {news} ) {
    return (
        <div>
            <NewsSection news={news}></NewsSection>

        </div>
    )
}

export default Home