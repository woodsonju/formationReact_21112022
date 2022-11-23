import { useState } from "react";
import { Btn } from "../components/Buttons";

const Connexion = () => {

    //Ajouter le Hook d'état 
    const [isLogged, updateLog] = useState(false);

    //Créer la fonction login 
    function login() {
       
        // if(isLogged) {
        //     updateLog(false);
        // }else {
        //     updateLog(true);
        // }

        updateLog(!isLogged);  
    }


    //JSX 
    //button html ou la fonction Btn 
    return(
        <div>
            <h1>Login</h1>
            <button onClick={login}>
                {(isLogged) ? 'Déconnexion': 'Connexion'} 
            </button>

            <Btn action={login} txt={(isLogged) ? 'Déconnexion': 'Connexion'}/>

            {
                (isLogged)?
                <p>Bienvenue</p>:
                <p>Vous n'êtes pas connecté.e</p>
            }

        </div>


    )


}
export  default Connexion;