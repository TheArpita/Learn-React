import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";

//default exported
import HeaderComponent from "./components/HeaderItems";

//named exported
//imported {Title} from "./components/HeaderItems";

//for all named exports
// import * as xyz from "./components/HeaderItems";

import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //RouterProvider is a component
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestuarentDetails from "./components/RestuarentDetails";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./Utils/userContext";
import Footer from "./components/Footer";

//to provide the store to the project
import { Provider } from "react-redux";
import store from './Utils/store';


//lazy loading
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () =>{
    const [user, setUser] = useState({name: "initial name"})
    return(
        // could be provided only to some components, here we are provided the store to the whole project
        <Provider store={store}>
        {/* to give the context an initial value, it'll overrride if any value is already given
        every component wrapped inside userContext.provider got the initial value, outside component will not get this value */}
        <UserContext.Provider value={{user: user, setUser: setUser}}>
            <HeaderComponent/>

            {/*outlet is like a placeholder for the children part of the routes*/}
            <Outlet/> 
            {/* <Body/> */}
            {/* <Footer/> */}
        </UserContext.Provider>
        {/* footer will not get the initial value provided to 'user' context */}
        <Footer/>
        </Provider>
)};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        //all the children go into the outlet according to the route
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                    }
                ]
            },
            {
                path: "/restuarentDetail/:id",
                element: <RestuarentDetails/>
            },
            {
                path: "instamart",
                //fallback is used to do the work before component under suspense is loaded
                element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            },
            {
                path: "cart",
                element: <Cart/>
            },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);