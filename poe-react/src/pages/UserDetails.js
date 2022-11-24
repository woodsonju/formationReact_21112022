import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {

    /*
        Le hook useParam() permet de récuperer les paramètres de la route 
        Permet d'acceder aux paramètres de l'URL courante 
        Le hook useParam() retourne un objet avec une clé (ex: id) et sa valeur (ex: 3)
        Dans notre exemple on souhaite afficher le profile du user 
        //https://localhost:3000/3 : 
            - On va recuperer la route (url)
            - On recupère la clé
    */
   const params = useParams();  //On récupère un objets avec les paramètres
   const id = params.id; //on recupère la clé

   //Declarer le Hook d'état 
   //la variable d'etat user est initalisée avec un tableau vide
    const [user, setUser] = useState({});


    //J'appelle l'API pour recuperer le USER ===> http://localhost:4000/users/{id}
    //getUser
    const getUser = async () => {
        const {data} = await axios.get("http://localhost:4000/users/" + id)
        setUser(data);
    }

    //useEffect 
    useEffect(() => {
      getUser();
    }, [])
    

   //JSX 
  return(
    <>
    {
        (user.id)?
        <div>
            <h1>Profil de {user.name}</h1>
            <p>Email : {user.email}</p>
        </div>
        :
        <p>Nope, rien à voir ici !</p>
    }
    </>
  )
    


}

export default UserDetails;