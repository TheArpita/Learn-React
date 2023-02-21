import { useState, useEffect, useContext } from "react";
import { cardData } from "../constants";
import RestuarentCard from "./RestuarentCard";
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";
import userContext from "../Utils/userContext";

const Body = () => {
    const [searchValue, setSearchValue] = useState();
    const [allRestuarentList, setAllRestuarentList] = useState([]);
    const [filteredRestuarentList, setFilteredRestuarentList] = useState([]);

    const {user, setUser} = useContext(userContext);

    async function getAllRestuarent(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING");
        const accessableData = await data.json();
        setAllRestuarentList(accessableData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestuarentList(accessableData?.data?.cards[2]?.data?.data?.cards);
    }
    
    useEffect(()=>{
        getAllRestuarent();
    }, []);

    const online = useOnline();
    if(!online) return <h1>🔴Check your internet connection</h1>

    return(
        <div className="body">
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="search here..."

                    //react - single way binding
                    value={searchValue}

                    //now it's double way binded
                    onChange={(e)=>{setSearchValue(e.target.value)}}
                />
                <input value={user.name} onChange={e=>setUser({name: e.target.value})}/>
                <button
                    className="search-btn"
                    onClick={()=> {
                        const data = filterData(searchValue, allRestuarentList);
                        setFilteredRestuarentList(data);
                    }}
                    // disabled={!searchValue}
                >search</button>
            </div> 
            <h2 className="all_title">All Restuarents</h2>
            {allRestuarentList?.length ?
            <div className="RestuarentList">
                {filteredRestuarentList.length ? filteredRestuarentList?.map((data, index)=><Link to={'/restuarentDetail/'+data.data.id} key={data.data.id || index}><RestuarentCard cardDetails={data?.data}/></Link>
                ) : <h1>No data to show</h1>}
            </div> : <Shimmer/>}
        </div>
    )
}

export default Body;