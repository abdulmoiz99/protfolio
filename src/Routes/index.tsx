import Auth from "../Components/Auth/Auth";
import Login from "../Components/Auth/Login";
import SignUp from "../Components/Auth/SignUp";
import NotFound from "../Components/NotFound/NotFound";

export const routes = [
    {
        path: '/auth',
        element: <Auth />,
        children: [
            { index: true, element: <Login /> },
            { path: '/signUp', element: <SignUp /> }

        ]
    },
    { path: '*', element: <NotFound /> }
];
