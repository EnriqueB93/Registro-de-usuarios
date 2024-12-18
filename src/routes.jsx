import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/List-User";

const router =createBrowserRouter([
{
    path:"/",
    element: <Home/> 
},

{
    path: "lista-de-usuarios",
    element:<ListUsers/>
}

])

export default router