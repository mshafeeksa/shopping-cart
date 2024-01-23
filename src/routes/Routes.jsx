import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './Error-page';
import Home from './Home';
import MensApparels from './MensApparels';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>, 
            errorElement: <ErrorPage />,
            children: [
                {
                    errorElement: <ErrorPage />,
                    children: [
                        { index: true, element: <Home /> },
                        {
                            path: "mens-apparels",
                            element: <MensApparels/>
                        },        
                    ],
            },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}