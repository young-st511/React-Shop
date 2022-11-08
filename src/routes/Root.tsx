import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "../components/Home/Home";
import Navigation from "../components/Navigation/Navigation";

function Root() {
  const location = useLocation();

  return (
    <StyledRoot>
      <Navigation />
      {location.pathname === "/" ? (
        <Home />
      ) : (
        <div className="router-outlet">
          <Outlet />
        </div>
      )}
    </StyledRoot>
  );
}

export default Root;

const StyledRoot = styled.div`
  min-height: 1000px;
  padding-bottom: 200px;

  background-color: ${({ theme }) => theme.theme.bgColor};
  color: ${({ theme }) => theme.theme.fontColor};

  .router-outlet {
    margin: 0 auto;
    max-width: 1360px;
  }
`;
