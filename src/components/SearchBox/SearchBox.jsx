import { useState } from "react";
import {PropTypes} from "prop-types";
import { Wrapper, Input, SubmitButton, Icon } from "components/SearchBox/SearchBox.styled";

export const SearchBox = ({searchParams, onSubmit }) => {
    const [value, setValue] = useState(searchParams);

    const handleSudmit = (e) => {
        e.preventDefault();
        onSubmit(value.trim());
    };

    return (
        <Wrapper onSubmit={handleSudmit}>    
            <Input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <SubmitButton type="submit">
                <Icon />
            </SubmitButton>
        </Wrapper>
  );
};

SearchBox.propTypes = {
    searchParams: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};