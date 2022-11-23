import { useState } from "react";
import { Btn } from "../components/Buttons";
import { Product, ProductObj, ProductTyped } from "../components/Product";

const Props = () => {

    /*
        Le state est lié au composant, est restreint à un composant
        Une props est une propriété que l'on passe à un composant 
        C'est une donnée qui vient de l'exterieur  du composant géneralement , de son parent direct (mais pas toujours le cas)
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
        {id : 3, name: 'T-shirt', price: 2}, 
    ]


    //Hook d'état : useState 
    const[isLoading, setLoading] = useState(false);

    /*
        Mettre à true isLoading 
        Ensuite Mettre à false isLoading pendant 5 sec
    */
   const testBtn = () => {
        setLoading(true);
        console.log("Coucou");
        setTimeout(() => {
            setLoading(false);
        }, 5000)
   }


    //JSX
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
                        <Product name="Tasse"/>
                        <Product name={prod} />
                        <Product />
                        {
                            products.map(p => <Product key={p} name={p}/>)
                        }   
                    </div>
                    
                    <h3>Objets</h3>
                    <div className="grid">
                        {
                            obj_produts.map(p => <ProductObj key={p.id} name={p.name} price={p.price}/>)
                        }
                        <ProductObj name="Café" price="2" currency="$"/>
                        <ProductObj name="Thé" />
                        <ProductObj name="Beurre de Cacahuète" price="quatre"/>
                        <ProductObj name="Beurre d'amande" prix="5"/>
                    </div>

                </article>
                <article>
                    <h2>Typage</h2>
                    <p>Les props, et la souplesse de JS sur les types peuvent poser problème : </p>
                    <ul>
                        <li>Propriété non passée</li>
                        <li>Mauvais type</li>
                        <li>Erreur sur le nom d'une prop</li>
                    </ul>
                    <p>Pour pallier à ça, il existe une librairie : prop-types</p>
                    <p>npm i prop-types</p>
                    <p>Attention : </p>
                    <ul>
                        <li>Ne fonctionne qu'avec les attributs calculés {'prop={valeur}'}</li>
                        <li>C'est librairie de développement, qui ne lance que des warnings</li>
                    </ul>
              
                    <h3>Produits typés : </h3>   
                    <div className="grid">
                        <ProductTyped name={'Machin'} price={300}/>
                        <ProductTyped name={'Bidule'}  price={300} action={() => alert('Coucou')}/>
                    </div>
                </article>
                <article>
                    <h2>Test Bouton : </h2>
                    <div>
                        <Btn action={testBtn} loading={isLoading}  txt={'Clic Clic'}/>
                        <Btn action={testBtn} disabled={true} txt={'Clic Clic'}/>
                    </div>
                </article>
            </main>
        </>

    )



}
export default Props;