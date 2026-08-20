import { createBrowserRouter } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ListPage from './pages/ListPage';
import NotFound from './pages/NotFound';
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
            element: <HttpCatDeetsPage />
            }  
        ],
    },
    {
    path: '*',
    element: <NotFound />
    },

])
export default router;

// when I press the link for Home, I'm not taken to homepage
// when I press the link for My List, I'm not taken to ListPage
// when I search for /cat/200 (or another id), I'm not taken to CatDeetsPage
// Links not working...but I can now search for things
// I'm taken to the cat id page...but no images appear
// nothing appears if the id page doesn't exist, it just takes me there
// So MissingPage doesn't work
// But NotFound works
// And ErrorPage also works
// and the NavBar works. Which is good, I guess