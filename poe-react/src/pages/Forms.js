import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
                Label - Input 
                Button 
                
            */}
            <form onSubmit={handleSubmit}>

            </form>
        </main>
        
        </>
    )

}
export default Forms;