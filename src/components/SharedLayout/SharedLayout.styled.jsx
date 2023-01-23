import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: auto;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
`;
export const Navigation = styled.nav`
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  margin-left: 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: green;

    :hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  }
  
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: green;
  }
`;