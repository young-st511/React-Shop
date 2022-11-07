import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "auth",
          element: <Fashion />,
        },
        {
          path: "signIn",
          element: <Accessory />,
        },
        {
          path: "assets",
          element: <Digital />,
        },
        {
          path: "books",
          element: <Product />,
        },
        {
          path: "remittance",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <GlobalStyle />
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
