import {createBrowserRouter} from "react-router-dom"
import RootLayout from "../Layouts/RootLayout"
import Home from "../pages/Index"
import Blog from "../pages/blogs"
import Post from "../pages/blogs/_id"
import About from "../pages/About"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/blog/:id",
                element: <Post />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ]
    },
])