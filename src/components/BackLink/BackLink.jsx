import { PropTypes } from "prop-types";
import { StyledLink } from "components/BackLink/BackLink.styled";

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  children: PropTypes.node,
};