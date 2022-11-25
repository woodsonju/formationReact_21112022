import { createSlice } from "@reduxjs/toolkit";


//Création d'un slice pour notre panier (Basket)
//createSlice permet de fusionner l'action et le reducer
//reducer permet de modifier le store 
//l'action est la chose à faire
export const basket = createSlice({

    //le nom du slice
    name: 'basket',

    //Le state initial du slice (initialisé à 0)
    initialState : {
        value: 0
    }, 
    //On définit les actions et la logique de tous les reducers
    //Par exemple une fonction pour Incrementer le Panier ou une fonction pour Decrementer le panier 
    //Pour chaque reducer on utilse une fonction
    //state : reference le state initialisé ci-dessus (c'est à dire valeur)
    reducers : {
        add : (state) => {state.value++},
        remove: (state) => {state.value--}
    }

})
//On export les actions
export const {add, remove} = basket.actions;
//On export par defaut le reducer 
export default basket.reducer;
