import React from 'react';

import { StyledLargeButton } from './style';

const LargeButton = ({
    text,
    onClick = () => { },
    color = "white",
    padding = 20,
    full = false,
    transition = false,
}) => {
    return (
        <StyledLargeButton
            onClick={onClick}
            full={full}
            color={color}
            padding={padding}
            transition={transition}
        >
            {text}
        </StyledLargeButton>
    );
}

export default LargeButton;