import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { themeState } from "../recoil_state";
import Accessory from "../routes/Accessory";
import Cart from "../routes/Cart";
import Digital from "../routes/Digital";
import Fashion from "../routes/Fashion";
import Product from "../routes/Product";
import Root from "../routes/Root";
import Footer from "./Footer";

function AppRouter() {
  const allTheme = useRecoilValue(themeState);
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
          path: "product/:id",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  const styleTheme = {
    theme: {
      bgColor: allTheme === "light" ? "#ffffff" : "#363636",
      fontColor: allTheme === "light" ? "#000000" : "#e6e6e6",
    },
  };

  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={styleTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
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

    margin: 0;

    transition: all 0.3s ease-in-out;
    a, button {
      color: inherit;
      text-decoration: none;
    }}

`;
