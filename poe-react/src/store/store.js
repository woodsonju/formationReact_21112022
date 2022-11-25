import {configureStore} from "@reduxjs/toolkit";

import {basket} from "./basket";

//Dans le store on va combiner tous nos reducers 
const store = configureStore({
    /*
        Le basket (reducer) est disponible dans pour tous les composants 
        de notre application 
    */
    reducer : {
        basket: basket.reducer
    }
})
export default store;