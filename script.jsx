import React from "react";
import ReactDOM from "react-dom/client";
import { RenderComponents } from "./components/renderComponets";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/error";
import Page from "./components/contrisdetails";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element: <RenderComponents/>,
    children:[{
      path:'/',
      element:<Home />
    },
    {
      path:'/:page',
      element: <Page/>
    }
  ]
},
{
  path: '*',
  element:<Error/>
}
]);

root.render(<RouterProvider router={router} />);