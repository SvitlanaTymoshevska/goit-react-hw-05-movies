import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-block;
  margin: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: green;
  font-weight: 500;

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;