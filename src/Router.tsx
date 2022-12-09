import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import NotFound from "./routes/NotFound";
import Price from "./routes/Price";


interface IRouterProps {

}
function Router({ }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

// const defaultRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Coins />
//       },
//       {
//         path: ":coinId",
//         element: <Coin />,
//         children: [
//           {
//             path: "chart",
//             element: <Chart />,
//           },
//           {
//             path: ":price",
//             element: <Price />,
//           }
//         ]
//       }
//     ],
//     errorElement: <NotFound />
//   }
// ]);


// export default defaultRouter;



