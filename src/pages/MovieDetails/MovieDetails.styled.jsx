import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;  
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%); 
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