import { Outlet } from "react-router-dom";
import { Container, Header, Navigation, StyledNavLink } from "./SharedLayout.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledNavLink to="/" end>Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Navigation>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};