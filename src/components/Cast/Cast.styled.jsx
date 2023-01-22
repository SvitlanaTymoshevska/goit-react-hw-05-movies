import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    margin: 10px;  
    width: 160px;
`;

export const Img = styled.img`
    width: 140px;
    height: 210px;
    border-radius: 5px;
    object-fit: cover;
`;

export const Plug = styled.div`
    width: 140px;
    height: 210px;
    border-radius: 5px;
    background-color: grey;
`;

export const Text = styled.p`
   font-weight: bold;
`;