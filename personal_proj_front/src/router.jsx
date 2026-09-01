import { createBrowserRouter } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ListPage from './pages/ListPage';
import NotFound from './pages/NotFound';
import Clock from './components/Clock';
import AboutPage from './pages/AboutPage';
import HttpCatDeetsPage from './pages/HttpCatDeetsPage'
import App from './App';

import { redirectIfLoggedIn, homeLoader, mustLogin, userConfirmation } from './user_utilities'

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        loader: userConfirmation,
        errorElement: <ErrorPage />,
        children: [

            {
            index:true,
            element:<AuthPage />,
            loader:redirectIfLoggedIn
            },

            {
            path: '/about',
            element: <AboutPage />
            },

            {
            path:'/home',
            element: <HomePage />,
            loader:homeLoader
            },

            {
            path: '/list',
            element: <ListPage />, 
            loader:mustLogin
            },

            {
            path: '/cat/:id',
            element: <HttpCatDeetsPage />,
            },
            
            {
            path: '/clock',
            element: <Clock />
            }
            
        ],
    },
    {
    path: '*',
    element: <NotFound />
    },

])
export default router;

