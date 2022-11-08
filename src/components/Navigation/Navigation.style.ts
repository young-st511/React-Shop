import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  width: 100%;
  height: 64px;
  padding: 0 8px;

  z-index: 9999;

  .header-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1360px;

    margin: 0 auto;
    background-color: #fff;

    z-index: 9999;

    h1 {
      flex: none;
      margin: 0 10px;
      font-size: 18px;
      font-weight: 700;

      z-index: 9999;
    }
  }
`;

const Nav = styled.nav`
  flex: 1 1 0%;
  font-size: 14px;
  font-weight: 600;

  a {
    height: 2rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    min-height: 2rem;
    font-size: 0.875rem;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 48px;
  align-items: center;

  padding: 0 0.5rem;

  .theme-button {
    flex-shrink: 0;
    position: relative;
    display: inline-grid;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    margin-right: 1rem;

    border-radius: 0.3rem;

    cursor: pointer;

    background: none;
    border: none;

    &:hover {
      background-color: #e6e6e6;
    }

    img {
      position: absolute;
      top: 5px;
      left: 5px;

      width: 2rem;
      height: 2rem;

      opacity: 0;
      transform: translateY(0.5rem) rotate(30deg);
      &.selected {
        opacity: 1;
        transform: translateY(0.1rem) rotate(0deg);
      }
    }
  }

  #search-bar {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0 1rem;

    background-color: #e6e6e6;
    border: none;
    border-radius: 0.25rem;
  }

  .cart-button {
    display: inline-flex;
    position: relative;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    width: 3rem;
    height: 3rem;
    min-height: 3rem;

    margin-left: 0.5rem;
    padding: 0 1rem;

    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1em;

    img {
      width: 2rem;
      height: 2rem;
      transform: translateY(2px);
    }

    .cart-number {
      display: inline-flex;
      padding: 0.25rem 0.5rem;
      border-radius: 9999px;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;

      background-color: #f52222;

      font-size: 0.75rem;
      font-weight: 900;
      color: rgb(229 231 235);
    }
  }
`;

const BlankBlock = styled.div`
  width: 100%;
  height: 64px;
  background-color: #fff;
`;

export { BlankBlock, HeaderRight, HeaderWrapper, Nav };
