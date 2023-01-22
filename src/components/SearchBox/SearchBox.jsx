import { useState } from "react";
import { Wrapper, Input, SubmitButton, Icon } from "components/SearchBox/SearchBox.styled";

export const SearchBox = ({ onSubmit }) => {
    const [value, setValue] = useState("");


    const handleSudmit = (e) => {
        e.preventDefault();
        onSubmit(value.trim());
        setValue("");
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