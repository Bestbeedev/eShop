import { createBrowserRouter } from "react-router-dom";
import { AppLayouts } from "../Layouts/AppLayouts";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const routes: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <AppLayouts />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
