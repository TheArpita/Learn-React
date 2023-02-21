import { commonUrl } from "../constants";
import Shimmer from "./Shimmer";
import useRestuarent from "../Utils/useRestuarent";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";


export default Restuarent = () => {

    const restuarent = useRestuarent();

    const dispatch = useDispatch();
    const handleCart = (e, item) => {
        e.stopPropagation();

        //dispath an action(addItem) with the payload <item>, as {payload: <item>}
        dispatch(addItem(item));
    }

    return (!restuarent?.menu?.items) ? <Shimmer/> : (
        <div>
            <img src={commonUrl+restuarent?.cloudinaryImageId}/>
            <h2>Restuarent name: {restuarent?.name}</h2>
            <h3>{restuarent?.costForTwoMsg}</h3>
            <div>
                <h2>Menu</h2>
                <ul>
                    {Object.values(restuarent?.menu?.items).map((item)=> <li key={item?.id}>
                        <img src={commonUrl+item?.cloudinaryImageId}/>
                        <h1>{item?.name}</h1>
                        <h2>Cost: {item?.price/100}</h2>
                        <button className="bg-green-100 p2 m5" onClick={e => handleCart(e, item)}>Add</button>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}