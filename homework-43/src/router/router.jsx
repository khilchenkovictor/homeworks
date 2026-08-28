import { createBrowserRouter } from 'react-router-dom';
import { Home, Contacts, About, NotFoundPage } from '../components';
import MainLayout from '../layouts';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { 
                index: true, 
                element: <Home /> 
            },
            { 
                path: 'about', 
                element: <About /> 
            },
            { 
                path: 'contacts', 
                element: <Contacts /> 
            },
            {
                path: '*',
                element: <NotFoundPage />
            },
        ],
    },
])