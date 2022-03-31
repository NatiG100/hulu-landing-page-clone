import React from 'react';

import { StyledLargeButton } from './style';

const LargeButton = ({ text, onClick = () => { }, color }) => {
    return (
        <StyledLargeButton onClick={onClick} color={color}>
            {text}
        </StyledLargeButton>
    );
}

export default LargeButton;