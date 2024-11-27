import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";

export const routes: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",    
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
