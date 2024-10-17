import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import NotFound from "./Components/NotFound/NotFound";
import { routes } from './Routes'
function App() {
  const routesElement = useRoutes(routes)
  return (
    <>
      {routesElement}
    </>
  );
}

export default App;
