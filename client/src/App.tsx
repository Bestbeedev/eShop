import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
