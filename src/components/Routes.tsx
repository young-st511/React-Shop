import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Navigation from "./Navigation";
import Accessory from "../routes/Accessory";
import Cart from "../routes/Cart";
import Digital from "../routes/Digital";
import Fashion from "../routes/Fashion";
import Product from "../routes/Product";
import Root from "../routes/Root";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "fashion",
          element: <Fashion />,
        },
        {
          path: "accessory",
          element: <Accessory />,
        },
        {
          path: "digital",
          element: <Digital />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRouter;

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: SUIT;
  }
  body {
    margin: 0;
    align-items: center;
  }
`;
