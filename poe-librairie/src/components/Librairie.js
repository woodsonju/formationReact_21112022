import {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import '../styles/Librairie.css';

const Librairie  = () => {

    const api = "http://localhost:4700/shows";

    const [shows, setShows] = useState([]);

    function getShows() {
        axios.get(api)
        .then(({data}) => {
            setShows(data);
        })
    }

    useEffect(() => {
        getShows();
    }, []);

    return (
        <>
            <h2>Mes séries</h2>
            {
                (!shows || shows.length === 0)?
                    <p>Votre librairie est vide :(</p>
                :
                <div className="grid">
                    {
                        shows.map(sh => <Card key={sh.id}  title={sh.title} img={sh.image} status={sh.isWatched}/>)
                    }
                </div>
            }
        </>
    )

}
export default Librairie;