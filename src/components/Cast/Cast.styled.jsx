import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
`;

export const Item = styled.li`
    margin: 10px;  
    width: 140px;
`;

export const Img = styled.img`
    width: 140px;
    height: 210px;
    border-radius: 5px;
    object-fit: cover;
`;

export const Plug = styled.div`
    width: 120px;
    height: 190px;
    padding: 10px;
    border-radius: 5px;
    background-color: grey;
`;

export const Accent = styled.p`
   font-weight: bold;
`;