import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div>Zb React Shop Project</div>

        <div>Jung YoungHun</div>

        <a
          href="https://github.com/young-st511/React-Shop"
          target={"_blank"}
          rel={"noreferrer"}>
          visit Git Hub
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  height: 300px;

  text-align: center;
  font-size: 14px;
  font-weight: 500;

  background-color: #e6e6e6;
  .footer-container {
    padding-top: 60px;
    * {
      margin: 30px;
    }

    a {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
