//Pour utiliser les props, on doit passer un argument props dans notre fonctions.
export const Product = (props) => {
    console.log(props);
    const name = props.name;  //On recupère la valeur 
    return (
        <div className="card">
            <h2>{name}</h2>  {/* On l'affiche*/}
        </div>
    )

}