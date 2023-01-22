import React from 'react';
import ReactDOM from "react-dom/client";
import Body from './Components/Body';
import Footer from './Components/Footer';
import Title from './Components/Title';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantPage from './Components/RestaurantPage';
import Profile from './Components/Profile';

const Header =()=>{
    return <>
        <Title />
        <Outlet />
        <Footer />
    </>
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Header />,
        errorElement: <Error />,
        children:[
        {
        path:"/",
        element: <Body />
        },
        {
        path:"/about",
        element: <About />,
        children:[
            {
                path:"profile",
                element:<Profile />
            }
        ]
        },
        {
        path:"/contact",
        element: <Contact />
        },
        {
        path:"/restaurant/:id",
        element: <RestaurantPage />
        }
        ]
    }   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);