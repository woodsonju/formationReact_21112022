import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ShowForm from "../components/ShowForm";

const Forms = () => {

    //variable d'état users 
    const [users, setUsers] = useState([]); //0, {}, [], ""

    const api_url = 'http://localhost:4000/users';

    const getUsers = () => {
        axios.get(api_url)    
        .then(res => setUsers(res.data));
    }

    const createUser = (user) => {
        axios.post(api_url, user)  //On persist notre user dans la base de données
        .then(() => getUsers())   //On relance la requête pour afficher notre nouveau user
        .catch(err => {
            console.error(err);
            alert('Nope !');
        })
    }


    /*
        Le tableau vide [] indique que useEffect ne s'executera qu'une fois  
    */
    useEffect(() => {
        getUsers();
    }, []);


    //Methode HandleSubmit
    //1-Recuperer les données dans le champs Input 
    //2- Avec ces données créer un objet user 
    //3- Appeler la méthode createUser en lui passant l'objet user
    //4- Reinitialiser le formulaire avec des valeurs vide
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;  //un tableau avec les inputs
        const name = form[0].value;  //valeur du 1er input du form 
        const email = form[1].value;
        const user = {name, email}; //equivalent à {name:name, email:email}
        createUser(user);
        form[0].value = "";
        form[1].value = "";
    }

    return (
        <>
        <h1>Formulaire</h1>
        <main>
            <h2>Users</h2>
            <div className="grid">
                {
                    users.map(u => 
                            <div key={u.id} className="card">
                                <h3>{u.name}</h3>
                                <p>
                                    {/* Permet d'afficher le profil du user */}
                                    <NavLink to={'/users/' + u.id}>Profil</NavLink>
                                </p>
                            </div>
                        )
                }
            </div>
            

            {/* 
                Créer un formulaire 
                Label Nom - Input Nom
                Label Email - Input Email
                Button 
                
            */}
            <h2>Form: </h2>
            <fieldset>
                <legend>Nouvel.le utilisateur.trice</legend>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="name">Name</label>
                        <input id="name"/>
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input id="email"/>
                    </p>
                    <button type="submit">Créer</button>
                </form>
            </fieldset>
            <ShowForm create={createUser}/>
        </main>
        
        </>
    )

}
export default Forms;