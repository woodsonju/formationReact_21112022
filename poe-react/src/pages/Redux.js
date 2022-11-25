
import{useDispatch, useSelector} from "react-redux";
import { add, remove } from "../store/basket";
const Redux = () => {
    //Hook useSelector : Pour récuperer une valeur dans le store 
    const count = useSelector((state) => state.basket.value);
    //Hook useDispatch : Appel les actions du reducer
    const dispatch = useDispatch();

    const addBasket = () => dispatch(add()) 
    function rmvBasket() {
        dispatch(remove());
    }

    return(
        <>
            <h1>Redux</h1>
            <p>Il y a {count} éléments dans mon panier</p>
            <div>
                <button onClick={addBasket}>+ Add to basket</button>
                <button onClick={rmvBasket}>- Remove to basket</button>
            </div>
        </>
    )

}
export default Redux;