import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "../components/Home/Home";
import Navigation from "../components/Navigation";

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
  margin: 10px auto;
  .router-outlet {
    margin: 0 auto;
    max-width: 1360px;
  }
`;
