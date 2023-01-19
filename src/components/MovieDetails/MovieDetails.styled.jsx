import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr ;
`;

export const Img = styled.img`
  display: block;
  height: 300px;
  border-radius: 5px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const Plug = styled.div`
  height: 300px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: grey;
`;