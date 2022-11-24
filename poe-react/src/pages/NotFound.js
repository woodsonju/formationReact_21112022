import { useLocation } from "react-router-dom";

const NotFound = () => {

    //useLocation : hook de react router DOM 
    //Retourne un objet location qui represente l'url courant 
    const location = useLocation();
    console.log(location)

    return (
        <div>
            <h1>Oups !</h1>
            <h2>R U Lost ?</h2>
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/11/enhanced/webdr07/anigif_enhanced-21255-1454345675-2.gif"
             alt="404 : page not found" />
             <p>Le chemin<i>{location.pathname}</i> n'existe pas</p>
        </div>
    );
};

export default NotFound;