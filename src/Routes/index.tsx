import Login from "../Components/Auth/Login";
import NotFound from "../Components/NotFound/NotFound";

export const routes = [
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> }
];
