import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;  
`;

export const List = styled.ul`
    margin-top: 20px;   
`;

export const Item = styled.li`
    margin-bottom: 8px; 
`;

export const StyledLink = styled(Link)`
    color: black; 

    &:hover {
        font-weight: bold;
    }
`;