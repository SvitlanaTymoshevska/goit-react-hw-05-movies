import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.form`
    position: relative;
    display: inline-flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
`;

export const Input = styled.input`
    width: 280px;
    padding: 8px;
    border: 2px solid grey;
    border-radius: 4px;
    font: inherit;

    &:focus-visible {
        outline-color: grey;
    }
`;

export const SubmitButton = styled.button`
    position: absolute;
    right: -36px;
    padding: 4px;
    border: 2px solid grey;
    border-radius: 4px;
    background-color: transparent;

    &:hover,
    &:focus {
      color: green;
    }
`;

export const Icon = styled(HiSearch)`
    width: 24px;
    height: 24px;
`;