import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './Error-page';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>, 
            errorElement: <ErrorPage/>
        },
    ]);
    return <RouterProvider router={router} />;
}