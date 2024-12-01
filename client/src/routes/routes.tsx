import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { HomeLayouts } from "../Layouts/HomeLayouts";

export const routes: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",    
    element: <HomeLayouts />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
