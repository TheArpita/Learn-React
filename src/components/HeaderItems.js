//named export
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/foodAppLogo.jpg';

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

    return(
    <div className="header">
        <Title/>
        <div className="header-options">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/help">help</Link></li>
                <li><Link to="/signin">signin</Link></li>
                <li><Link to="/cart">cart</Link></li>
            </ul>
        </div>
            {!isLoggedIn ? <button onClick={()=> setIsLoggedIn(true)}>Login</button> : <button onClick={()=> setIsLoggedIn(false)}>Logout</button>}
    </div>
)};

export default HeaderComponent;