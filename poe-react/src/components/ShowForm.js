
const ShowForm = ({create}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {};
        for (let i = 0; i < form.length - 1; i++) {   //On exclu le dernier input (bouton)}
          const input = form[i] ;
          user[input.id] = input.value;
        }
        console.log(user);
        create(user);
    }

    return (
        <div>
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
        </div>
    );
};

export default ShowForm;