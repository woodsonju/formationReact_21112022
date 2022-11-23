import { useEffect, useState } from "react";
import axios from 'axios';

const Request = () => {

    const joke_api = "https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode";
    
    const [joke, setJoke] = useState("");
    const [character, setCharacter] = useState({});
    const [id, setId] = useState(1);


    const swapi_people = "https://swapi.dev/api/people/";

    const getJoke = async () => {
        //data (propriété d'axios) est la response en json 
        const {data} = await axios.get(joke_api);
        
        setJoke(data.joke)
    }

    //https://swapi.dev/api/people/2  ==>  swapi_people + id
    const getCharacter = async () => {
        const {data} = await axios.get(swapi_people + id);
        setCharacter(data);
    }

    //Recuperer la liste des characters 
    

    useEffect(() => {
        console.log("Coucou de useEffect");
        getJoke();
    }, []);  //[] : aucune valeur à surveillé, ne s'execute qu'une seule fois, au rendu


    //On surveille l'id 
    //Quand l'id est mise à jour (change) useEffect se lance et appel la méthode getCharacter qui charge les données venant de l'API
    useEffect(() => {
        getCharacter();
    }, [id])


    return(
        <>
            <h1>Les requêtes</h1>
            <main>
                <h2>Presentation</h2>
                <p>Pour commencer, il faut installer axios dans le projet : </p>
                <p><code>npm i axios</code></p>
                <div className="card">{joke}</div>
                <p>Pour récuperer 1 fois des données dans une API, au moment du chargement du composant, on passe notre requête dans useEffect, et en 
                    second paramètre de useEffect, on passe un tableau vide []
                </p>
                <p>Ainsi, on précise à useEffect qu'il n'a aucune valeur à surveiller, il ne s'executera qu'une seule fois, au chargements</p>

                <h2>Avec filtre dynamique : </h2>
                <p>
                    <button disabled={id <= 1} onClick={() => setId(id - 1)}>Précedent</button>
                    <button  onClick={() => setId(id + 1)}>Suivant</button>
                </p>
                <div className="card">
                    <h3>{character.name}</h3>
                    <p>Naissance: {character.birth_year}</p>
                    <p>Taille : {character.height}cm</p>
                    <p>Poids : {character.mass}kg</p>
                </div>
            </main>
        </>
    )


}
export default Request;