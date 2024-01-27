import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './Error-page';
import Home from './Home';
import DisplayCategory from './Display-category';
import MainDisplayItem from './Main-display-item';
import { Men, Women, Jewellery } from '../data';
import { useState } from 'react';
import Cart from './Cart';

export default function Router() {
    const [cart, setCart] = useState([]);
    function updateCart(newCart) {
        const tempNewCart = newCart.slice();
        console.log(tempNewCart)
        setCart(tempNewCart);
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root cartCount={cart.length} key={cart.length}/>, 
            errorElement: <ErrorPage />,
            children: [
                {
                    errorElement: <ErrorPage />,
                    children: [
                        { index: true, element: <Home /> },
                        {
                            path: "mens-apparels",
                            element: <DisplayCategory category={Men} key={Men} />,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: "womens-apparels",
                            element: <DisplayCategory category={Women} key={Women} />,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: "jewellery",
                            element: <DisplayCategory category={Jewellery} key={Jewellery} />,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: ":id",
                            element: <MainDisplayItem updateCart={updateCart} cart={cart} key={cart}/>,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: "cart",
                            element: <Cart updateCart={updateCart} cart={cart} key={cart}/>,
                            errorElement: <ErrorPage />
                        },        
                    ],
            },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}