import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Error from "./components/Error";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet, useLocation} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


/*
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const AppLayout=()=>{
  const location=useLocation();
    return(
      <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
            {location.pathname === "/" && <Footer />}
        </div>
      </Provider>
    );

    
};

  const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
          {
             path:"/",
             element:<Body/>,
            
          },
          {
            path:"/about",
            element:<About/>
        },
        {
          path:"/Contact",
          element:<Contact/>
        },
        {
          path:"/restaurants/:resId",
          element:<RestaurantMenu/>
        },
        {
          path:"/cart",
          element:<Cart/>,
        },
        ],
        errorElement:<Error/>,
    },
  ]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);