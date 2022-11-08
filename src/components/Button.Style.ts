import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  font-size: 0.875rem;
  line-height: 1em;
  font-weight: 600;

  border-radius: 0.5rem;

  background-color: #000000;
  border: 1px solid #000;
  color: #ffffff;

  &:hover {
    background-color: #464646;
  }

  &.reversal {
    background-color: #fff;
    border-color: #e6e6e6;
    color: #000;
    &:hover {
      background-color: #e6e6e6;
    }
  }
`;

export default Button;
