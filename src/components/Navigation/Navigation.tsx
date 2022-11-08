import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import cartImg from "../../assets/cart.svg";
import sunImg from "../../assets/sun.svg";
import moonImg from "../../assets/moon.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartListNumState, themeState } from "../../recoil_state";
import {
  BlankBlock,
  HeaderRight,
  HeaderWrapper,
  Nav,
} from "./Navigation.style";

function Navigation() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useRecoilState(themeState);
  const cartNumber = useRecoilValue(cartListNumState);

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
        <div className="header-container">
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
              <img
                src={sunImg}
                alt="라이트 모드"
                className={theme === "light" ? "selected" : ""}
              />
              <img
                src={moonImg}
                alt="다크 모드"
                className={theme === "dark" ? "selected" : ""}
              />
            </button>
            <input
              type={"search"}
              placeholder="검색"
              id="search-bar"
              value={search}
              onChange={handleChangeSearch}
            />
            <Link className="cart-button" to={"cart"}>
              <img src={cartImg} alt="장바구니" />
              <span className="cart-number">{cartNumber}</span>
            </Link>
          </HeaderRight>
        </div>
      </HeaderWrapper>
      <BlankBlock />
    </>
  );
}

export default Navigation;
