import { useEffect, useState } from "react";

const Effect = () => {

    /*
        Le Hook d'effet permet l'execution d'effet de bord dans les fonctions composants : 
        Charger des données depuis un serveur distant, s'abonner, déclencher une alerte à chaque fois que votre panier 
        est mis à jour, sauvegarder ce panir à chaque mise à jour, modfifier manuellement le DOM sont des exemples d'effets de bord

        Ce sont des actions qui ne font pas partie du return, qui interviennent après que React ait mis à jour le 
        DOM
    */
   const [counter, setCounter] = useState(0);
   const [isLogged, setLog] = useState(false);

   let toto = "Toto";

   const increment = () => {
        setCounter(counter + 1);
        toto = "Not toto";
        console.log("In increment : ", toto);
   }

   //1- Agit à chaque modification 
   //L'effet ici, met à jour le counter qui s'increment 
   useEffect(() => {
    console.log("(First) Counter a été incrementé, new value :", counter);
   })

   //2-useEffect ne se lancera que lorsque ce sont ces valeurs qui sont modifiées
   //On peut passer un deuxième paramètre à la fonction useEffect : 
   //Un tableau contenant les données à surveiller 
   useEffect(() => {
        console.log("(Second) Counter a été incrementé, new value :", counter);
   }, [counter])


   //3- useEffect : Pour couper les connexions à des flux, des websockets... 
   useEffect(() => {
        let seconds = 0;
        console.log("Component a été rendu depuis :");
        let interval = setInterval(() => {
            seconds++;
            console.log(`${seconds} seconds`);
        }, 1000)
        return () => {
            //Couper tous les flux 
            //Si on ne le fait pas, on génère une "fuite de memoire"
            clearInterval(interval);
        }
   })

   //JSX
   return(
    <>
        <h1>Effect</h1>
        <article>
            <h2>Presentation : useEffect</h2>
            <p>Compteur : {counter}</p>
            <p>
                <button onClick={increment}>++</button>
                <button onClick={() => setLog(!isLogged)}>{(isLogged)? 'Logout' : 'Login'}</button>
            </p>
            <p>useEffect permet d'agir lorsque le DOM est mis à jour /rendu</p>
            <p>Il agit à la création du composant, au 1er rendu, et à chacunes des modifications.</p>
            <p>On se sert de useEffect pour : </p>
            <ul>
                <li>Faire des requête à la création du composant</li>
                <li>Agir à la modifications d'une valeur précise</li>
                <li>Agir à chaque modification</li>
                <li>Pour couper les connexions à des flux, des websockets, des observables...</li>
            </ul>
        </article>
    </>
   )

}

export default Effect;