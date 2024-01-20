import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './Error-page';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>, 
            errorElement: <ErrorPage/>
        },
    ]);
    return <RouterProvider router={router} />;
}