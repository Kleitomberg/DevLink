import {createBrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Error404 from './pages/Error';
import Private from './routes/private';
import Loged from './routes/loged';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element:<Loged> <Login/></Loged>
    },
    {
        path: '/admin',
        element:<Private> <Admin/> </Private>
    },
    {
        path: '*',
        element: <Error404/>
    }
])

export { router };
