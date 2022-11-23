import { PropTypes } from "prop-types";


//Pour utiliser les props, on doit passer un argument props dans notre fonctions.
export const Product = (props) => {
    console.log(props);
    const name = props.name;  //On recupère la valeur 
    return (
        <div className="card">
            <h3>{name}</h3>  {/* On l'affiche*/}
        </div>
    )
}

//Prend en paramètre un objet qu sont les propriétés de l'objet
export const ProductObj = ({name, price, currency="€"}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix (HT) : {price}{currency}</p>
            <p>Prix (TTC) : {price * 1.2}{currency}</p>
        </div>
    )
}



export const ProductTyped = ({name, price, action, currency = "€"}) => {
    
    //JSX
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix (HT) : {price}{currency}</p>
            <p>Prix (TTC) : {price * 1.2}{currency}</p>
            {action && <button onClick={action}>Clic</button>}
        </div>
    )
}


//Avec la librairie prop-types : rendre les données obligatoires et typées
ProductTyped.propTypes = {
    name: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    action: PropTypes.func
}

