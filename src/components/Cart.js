import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../Utils/cartSlice";

export default Cart = () => {
    const cartItems = useSelector(store => {
        //only subscribe to the needed part, don't subscribe to the whole store, otherwise every time store will be changed cart will be re-render
        return store.cart.items
    });
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return(
        <>
            <h3 className="font-bold text-2xl">{cartItems.length} item(s) you added</h3>
            <button className="p2 m2 bg-red-500" onClick={()=> handleClearCart()}>clear</button>
        </>
    )
}