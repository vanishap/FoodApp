import React, {lazy, Suspense} from 'react';
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
import Cart from './Components/Cart';
import Shimmer from './Components/Shimmer';
import { Provider } from 'react-redux';
import store from './utils/store';


// lazy loading
const Offers = lazy(()=>import("./Components/Offers"))

const Header =()=>{
    return (
    <Provider store={store}>
        <Title />
        <div style={{textAlign:"center"}}>
        <h4 >Note: This site uses 3rd party APIs which require CORS to see the results. Please enable CORS if it is not enabled</h4>
        </div>
        <Outlet />
        <Footer />
    </Provider>
    )
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
            path:'/cart',
            element:<Cart />
        },
        {
        path:"/restaurant/:id",
        element: <RestaurantPage />
        },
        {
            path:"/offers",
            element:<Suspense fallback={<Shimmer/>}>
                        <Offers />
                    </Suspense>
        }
        ]
    }   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);