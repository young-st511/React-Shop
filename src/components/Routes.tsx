import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Accessory from "../routes/Accessory";
import Cart from "../routes/Cart";
import Digital from "../routes/Digital";
import Fashion from "../routes/Fashion";
import Product from "../routes/Product";
import Root from "../routes/Root";
import Footer from "./Footer";

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
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default AppRouter;

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: SUIT;
    font-weight: 500;

    transition: all 0.3s ease-in-out;
    a, button {
      color: inherit;
      text-decoration: none;
    }
  }
  body {
    margin: 0;
    align-items: center;
  }
`;
