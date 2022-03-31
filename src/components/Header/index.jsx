import React from 'react';
import LargeButton from '../buttons/LargeButton';

import {
    StyledHeader,
    StyledMiniSection,
    StyledBrand,
    StyledImage,
    StyledForeground,
    StyledSignup
} from './style'

const Header = () => {
    return (
        <StyledHeader>
            <StyledImage src="/hulu-bg.jpg" />
            <StyledForeground>
                <p>BUNDLE WITH ANY HULU PLAN & SAVE</p>
                <StyledBrand src="/brands.png" />
                <h2>Get endless entertainment, live sports, and the shows and movies you love.</h2>
                {/* button  */}
                <LargeButton
                    text={"GET THE DISNEY BUNDLE"}
                />
                <StyledMiniSection>
                    <a>What&sbquo;s included?</a>
                    <p> see </p>
                    <a>Bundle terms</a>
                </StyledMiniSection>
                <StyledSignup>
                    <a>Sign up for Hulu only</a>
                </StyledSignup>
            </StyledForeground>
        </StyledHeader>
    );
}

export default Header;