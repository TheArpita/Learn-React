import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { commonUrl } from "../constants";
import Shimmer from "./Shimmer";

export default Restuarent = () => {
    const {id} = useParams();
    const [restuarent, setRestuarent] = useState({});

    useEffect(()=>{
        getDetails();
    }, []);

    async function getDetails () {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=22.572646&lng=88.36389500000001&menuId="+id);
        const jsonData = await data.json();
        setRestuarent(jsonData.data);
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
                    </li>)}
                </ul>
            </div>
        </div>
    )
}