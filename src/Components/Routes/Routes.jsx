import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Recipes from "../Pages/Recipes/Recipes";
import Error from "../Pages/Error/Error";
import Terms from "../Pages/Terms/Terms";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          try {
            const slideData = await fetch('https://chef-recipe-hunter-server-eagl3eyes.vercel.app/slides');
            const slides = await slideData.json();

            const chefsData = await fetch('https://chef-recipe-hunter-server-eagl3eyes.vercel.app/chef');
            const chefs = await chefsData.json();
    
    
            return {
              slides: slides,
              chefs: chefs,
            };
          } catch (err) {
            console.log(err);
          }
        }

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
       
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/chefRecipes/:id",
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({params})=>fetch(`https://chef-recipe-hunter-server-eagl3eyes.vercel.app/recipe/${params.id}`)
      }
    ],
  },
]);

export default router;
