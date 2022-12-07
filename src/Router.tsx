import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import NotFound from "./routes/NotFound";

const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Coins />
      },
      {
        path: ":coinId",
        element: <Coin />
      }
    ],
    errorElement: <NotFound />
  }
]);


export default defaultRouter;



