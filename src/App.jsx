import {createBrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Error404 from './pages/Error';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/admin',
        element:<Admin/>
    },
    {
        path: '*',
        element: <Error404/>
    }
])

export { router };