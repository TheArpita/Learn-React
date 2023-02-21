//custom hook
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {RESTUARENT_DETAIL_URL} from "../constants";

export default useRestuarent = () => {
    const [restuarent, setRestuarent] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getDetails();
    }, []);

    async function getDetails () {
        const data = await fetch(RESTUARENT_DETAIL_URL+id);
        const jsonData = await data.json();
        setRestuarent(jsonData.data);
    }

    return restuarent;
}