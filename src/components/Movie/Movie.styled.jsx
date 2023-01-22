import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr ;
  padding: 20px;  
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%); 
`;

export const Img = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

export const Plug = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  border-radius: 5px;
  background-color: grey;
`;