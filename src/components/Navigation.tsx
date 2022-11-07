import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cartImg from "../assets/cart.svg";
import sunImg from "../assets/sun.svg";
import moonImg from "../assets/moon.svg";
import { useRecoilState } from "recoil";
import { themeState } from "../recoil_state";

function Navigation() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useRecoilState(themeState);

  const handleChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSearch(value);
  };

  const handleThemeClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <HeaderWrapper>
        <h1>
          <Link to={"/"}>React Shop</Link>
        </h1>
        <Nav>
          <NavLink to={"fashion"}>패션</NavLink>
          <NavLink to={"accessory"}>악세서리</NavLink>
          <NavLink to={"digital"}>디지털</NavLink>
        </Nav>

        <HeaderRight>
          <button
            className="theme-button"
            aria-hidden={"true"}
            onClick={handleThemeClick}>
            {theme === "light" ? (
              <img src={sunImg} alt="라이트 모드" />
            ) : (
              <img src={moonImg} alt="다크 모드" />
            )}
          </button>
          <input
            type={"search"}
            placeholder="검색"
            id="검색창"
            value={search}
            onChange={handleChangeSearch}
          />
          <Link className="cart-button" to={"cart"}>
            <img src={cartImg} alt="장바구니" />
          </Link>
        </HeaderRight>
      </HeaderWrapper>
      <BlankBlock />
    </>
  );
}

export default Navigation;

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 48px;
  padding: 8px;

  align-items: center;

  background-color: #fff;

  z-index: 9999;

  h1 {
    flex: none;
    margin: 0 10px;
    font-size: 18px;
    font-weight: 700;
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
  padding: 0 8px;

  .theme-button {
    img {
      width: 28px;
      height: 28px;
    }
  }

  .cart-button {
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const BlankBlock = styled.div`
  width: 100%;
  height: 64px;
  background-color: #fff;
`;
