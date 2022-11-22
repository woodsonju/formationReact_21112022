import { useState } from "react";
import { Product } from "../components/Product";

const Props = () => {

    /*
        Le state est lié au composant  
        Une props est une propriété que l'on passe à un composant 
        C'est une donnée qui vient de l'exterieur  du composant géneralement , de son parent direct (mais pas toujours)
        Les composant parents partagent leurs données avec leurs enfants via les props

        Les composants sont comme des fonctions JavaScript 
        Ils acceptent des entrées quelconques (appelées props) et renvoient des éléments React décrivant ce qui doit apparaitre 
        à l'ecran
    */

    const prod = 'Ecran';
    const products = ['Ordinateur', 'Souris', 'Clavier'];
    const obj_produts = [
        {id : 1, name: 'Pomme', price: 2}, 
        {id : 2, name: 'Mouchoirs', price: 1}, 
        {id : 2, name: 'T-shirt', price: 2}, 
    ]


    //Hook d'état : useState 
    const[isLoading, setLoading] = useState(false);


    return (
        <>
            <h1>Les props</h1>
            <main>
                <article>
                    <h2>Fonctionnement</h2>
                    <h3>Simple : </h3>
                    <div className="grid">
                        {/* 
                            Quand on appelle le composant Product on peut lui transmettre des propriétés 
                            Ici, on donne au composant Product la propriété name avec la valeur Tasse
                            On peut passer autant de propriété que l'on souhaite à  un composant 
                            Cela peut -etre n'importe quel type de donnée
                            
                        */}
                        <Product dfdfdf="Tasse"/>
                        
                    </div>
                </article>
            </main>
        </>

    )



}
export default Props;