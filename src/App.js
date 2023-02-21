import React from "react";
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
import Error from "./components/Error";
import RestuarentDetails from "./components/RestuarentDetails";
import Profile from "./components/Profile";

const AppLayout = () =>(
    <>
        <HeaderComponent/>

        {/*outlet is like a placeholder for the children part of the routes*/}
        <Outlet/> 
        {/* <Body/> */}
        {/* <Footer/> */}
    </>
);

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
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);