import { StyledLink } from "components/BackLink/BackLink.styled";

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};