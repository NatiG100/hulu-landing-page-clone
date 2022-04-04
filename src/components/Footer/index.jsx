import React from 'react';

import FacebookIcon from './../../assets/social-media/facebook.svg';
import TwittterIcon from './../../assets/social-media/twitter.svg';
import YoutubeIcon from './../../assets/social-media/youtube.svg';
import InstaIcon from './../../assets/social-media/instagram.svg';

import {
    StyledFooter,
    StyledFooterNavigation,
    StyledNavigationGroup,
    StyledNavigationSubGroup,
    StyledDivider,
    StyledSocialMediaList,
    StyledLinks,
} from './style';


export const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterNavigation>
                <StyledNavigationGroup>
                    <h3>browse</h3>
                    <StyledNavigationSubGroup>
                        <a>Streaming Library</a>
                        <a>Live TV</a>
                        <a>Live News</a>
                        <a>Live Sports</a>
                    </StyledNavigationSubGroup>
                    <StyledNavigationSubGroup>
                        <a>TV Shows</a>
                        <a>Movies</a>
                        <a>Originals</a>
                        <a>Networks</a>
                        <a>Kids</a>
                        <a>FX</a>
                    </StyledNavigationSubGroup>
                    <StyledNavigationSubGroup>
                        <a>HBO Max™</a>
                        <a>Cinemax</a>
                        <a>Showtime</a>
                        <a>STARZ</a>

                    </StyledNavigationSubGroup>
                    <StyledNavigationSubGroup>
                        <a>Hulu, Disney+, and ESPN+</a>
                        <a>Hulu (No Ads), Disney+, and ESPN+</a>
                        <a>Student Discoun</a>
                    </StyledNavigationSubGroup>
                </StyledNavigationGroup>
                <StyledNavigationGroup>
                    <h3>help</h3>
                    <StyledNavigationSubGroup>
                        <a>Account & Billing</a>
                        <a>Plans & Pricing</a>
                        <a>Supported Devices</a>
                        <a>Accessibility</a>
                    </StyledNavigationSubGroup>
                </StyledNavigationGroup>
                <StyledNavigationGroup>
                    <h3>about us</h3>
                    <StyledNavigationSubGroup>
                        <a>Shop Hulu</a>
                        <a>Press</a>
                        <a>Jobs</a>
                        <a>Contact</a>
                    </StyledNavigationSubGroup>
                </StyledNavigationGroup>
            </StyledFooterNavigation>
            <StyledDivider />
            <StyledSocialMediaList>
                <FacebookIcon />
                <TwittterIcon />
                <YoutubeIcon />
                <InstaIcon />
            </StyledSocialMediaList>
            <StyledLinks>
                <p>© 2022 Hulu, LLC</p>
                <a>About Ads</a>
                <a>Terms of Use</a>
                <a>Privacy Policy</a>
                <a>Do Not Sell My Personal Information</a>
                <a>Your California Privacy Rights</a>
                <a>TV Parental Guidelines</a>
            </StyledLinks>
        </StyledFooter>
    );
}

export default Footer;