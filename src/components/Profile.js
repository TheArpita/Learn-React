import {useEffect, useState} from "react";

const Profile = (props) => {
    //multiple state variables
    const [count, setCount] = useState(0);
    const [count2] = useState(0);

    useEffect(()=>{
        //useEffect isn't comparable with any React calss based life cycle method, react isn't using those behind the scene in case of useEffect
        //2nd useEffect 
        const timer = setInterval(()=>{}, 1000);

        //return will call while unmounting the component
        return () => {
            clearInterval(timer);
        }
    }, [])

    //1st this - considering as render
    return(
        <div>
            <h2>Profile page</h2>
            <p>{props?.name}</p>
            <h3>count: {count}</h3>
            <button onClick={()=> setCount(1)}>count++</button>
            <h4>count2: {count2}</h4>
        </div>
    )
};

export default Profile;