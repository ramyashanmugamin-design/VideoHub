import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Profile from './Profile.jsx';
import NotFound from './NotFound.jsx';

const router= createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement : <NotFound />
    },
    {
        path:'/Profile',
        element : <Profile />,
        errorElement : <NotFound />
    }
],{
  
  basename: '/VideoHub' 
});

createRoot(document.getElementById('root')).render
(
 <RouterProvider router={router} />
)
