
import { useNavigate } from "react-router-dom"
import "../styles/Buttons.css"

export const Btn = ({action, txt, loading=false, disabled = false}) => {
    return(
        <>
            <button disabled={disabled} onClick={action}>
                {/* 
                    Si isLoading est égale à false on affiche le texte 
                    Sinon on applique la classe CSS bounce
                 */}
                {(!loading) ? txt : <span className="bounce"/>}
            </button>
        </>
    )
}


export const BackBtn = () => {

    /*
        Le Hook useNavigate() nous permet de naviguer à travers les routes
        Rediriger l'utilisateur vers une URL spécifique
    */

    const navigate = useNavigate();
    console.log(navigate);

    //Nous permet de nous rediriger vers la page précedemment visitée
    const back = () => navigate(-1);

    return <button onClick={back} className ="secondary">{'<'} Back</button>

}


