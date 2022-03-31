import React from 'react';
import {
    StyledLiveTVSection,
    StyledContent,
    StyledLink,
} from './style';
import DownIcon from './../../../public/down.svg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LiveTVSection = () => {
    const bounce = useRef();
    useEffect(() => {
        var tl = gsap.timeline({ repeat: -1, });
        tl.from(bounce.current, { y: 0, duration: 0, });
        tl.to(bounce.current, { y: 10, duration: 1, ease: "Power1.easeIn" });
        tl.to(bounce.current, { y: 0, duration: 1, ease: "Power1.easeOut" });
    }, []);
    return (
        <StyledLiveTVSection>
            <StyledContent>
                <h4>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+</h4>
                <h1>Live TV Makes It Better</h1>
                <h2>Make the switch from cable.
                    Get 75+ top channels on Hulu with your
                    favorite live sports, news, and events -
                    plus the entire Hulu streaming library.
                    Access endless entertainment with Disney+
                    and live sports with ESPN+.
                    All three for a new price of $69.99/month.</h2>
                <p>18+ only. Regional restrictions,
                    blackouts and <a>Live TV terms apply</a>.
                    Access content from each service separately
                    and access ESPN+ content via Hulu. Location
                    data required to watch certain content.
                    Offer valid for eligible subscribers only. </p>
                <StyledLink >
                    VIEW CHANNELS IN YOUR AREA →
                </StyledLink>
                <div ref={bounce} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <DownIcon />
                </div>
            </StyledContent>
        </StyledLiveTVSection>
    );
}

export default LiveTVSection;