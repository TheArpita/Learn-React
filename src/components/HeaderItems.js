//named export
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/foodAppLogo.jpg';
import useOnline from "../Utils/useOnline";
import userContext from "../Utils/userContext";
import {useSelector} from 'react-redux';

//export const title = ...
const Title = () => (
    <div className="title">
        <a href="/">
            <img className="logo" alt="broken" src={logo}/>
        </a>
        <h1 className= "title" key= "k1">FoodyZone</h1>
    </div>
);

//default export
const HeaderComponent = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();
    const {user} = useContext(userContext);

    //subscribe to the redux store
    const cartItems = useSelector(store => store.cart.items)

    return(
    <div className="header">
        <Title/>
        <div className="header-options">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/help">help</Link></li>
                <li><Link to="/signin">signin</Link></li>
                <li><Link to="/instamart">InstaMart</Link></li>
                <li><Link to="/cart">cart - {cartItems.length} items</Link></li>
            </ul>
        </div>
            <p>{isOnline ? '🟢' : '⚫'}</p>
            <h4>{user.name}</h4>
            {!isLoggedIn ? <button onClick={()=> setIsLoggedIn(true)}>Login</button> : <button onClick={()=> setIsLoggedIn(false)}>Logout</button>}
    </div>
)};

export default HeaderComponent;