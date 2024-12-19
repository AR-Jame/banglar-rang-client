import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./LayOut/Home";
import Login from "./LayOut/Login";
import Register from "./LayOut/Register";
import AddItem from "./LayOut/AddItem";
import AllPainting from "./LayOut/AllPainting";
import PaintDetails from "./LayOut/PaintDetails";
import MyList from "./LayOut/MyList";
import PrivateRoute from "./LayOut/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }, 
            {
                path: '/register',
                element: <Register />
            }, 
            {
                path: '/add_item',
                element: <AddItem />
            },
            {
                path: '/all_paint',
                element: <AllPainting />,
                loader: () => fetch('https://banglar-rang-server.vercel.app/paintings')
            },
            {
                path: '/all_paint/:id',
                element: <PaintDetails />,
                loader: ({params}) => fetch(`https://banglar-rang-server.vercel.app/paintings/${params.id}`)
            },
            
            {
                path: '/my_list/:email',
                element:<PrivateRoute><MyList /></PrivateRoute>,
                loader: ({params}) => fetch(`https://banglar-rang-server.vercel.app/email/${params.email}`)
            }
        ]
    }
])
export default router