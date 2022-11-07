import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cartImg from "../assets/cart.svg";
import sunImg from "../assets/sun.svg";
import moonImg from "../assets/moon.svg";

function Navigation() {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSearch(value);
  };

  return (
    <HeaderWrapper>
      <h1>
        <Link to={"/"}>React Shop</Link>
      </h1>
      <Nav>
        <NavLink to={"fasion"}>패션</NavLink>
        <NavLink to={"accesory"}>악세서리</NavLink>
        <NavLink to={"digital"}>디지털</NavLink>
      </Nav>

      <HeaderRight>
        <button className="theme-button">
          <img src={sunImg} />
          <img src={moonImg} />
        </button>
        <input
          type={"search"}
          placeholder="검색"
          id="검색창"
          value={search}
          onChange={handleChangeSearch}
        />
        <Link className="cart-button" to={"cart"}>
          <img src={cartImg} />
        </Link>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Navigation;

const HeaderWrapper = styled.header`
  h1 {
    margin: 0 8px;
    font-size: 18px;
    font-weight: 70;
  }
`;

const Nav = styled.nav`
  font-size: 14px;
  font-weight: 600;
`;

const HeaderRight = styled.div`
  padding: 0 8px;
`;
