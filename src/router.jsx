import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Servis from "./pages/Servis";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/servis",
        element:<Servis/>
    }
])