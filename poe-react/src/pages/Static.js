const Static = () => {

    let message = "Les JSX servent à interpreter du Javascript entre {}, on peut donc y manipuer des données.";

    const fruits = ['Pomme', 'Poire', 'Banane', 'Ananas'];

    const fruis_bis = [
        {id: 1, name: "Pomme", Price: 2.9},
        {id: 2, name: "Mangue", Price: 2},
        {id: 3, name: "Clémentine", Price: 3.1},
    ];
        
    const isLogged = true;
    const name = "Jane Doe";

    const conditionalDisplay = () => {
        if(isLogged) {
            return <p>Connecté.e (Ce message est affiché par une fonction )</p>
        } else {
            return <p>Pas connecté.e (Ce message est affiché par une fonction )</p>
        }
    }

    return (
        <>
            <h1>Données Statiques</h1>
            <main>
                <div className="card">{message}</div>
                <article>
                    <h2>les listes</h2>
                    <ul>
                        {/* prop key : doit contenir une valeur unique */}
                        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
                    </ul>
                    <div className="grid">
                        {
                            // fruis_bis.map(f => {
                            //     return <div className="card" key={f.id}>{f.name}, {f.Price}€</div>
                            // })
                            fruis_bis.map(f => (
                                <div className="card" key={f.id}>{f.name}, {f.Price}€</div>
                                ))
                        }
                    </div>
                </article>
            </main>
        </>
    )

}

export default Static;