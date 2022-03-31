import gsap from 'gsap';
import React, { useState, useEffect, useRef } from 'react';

import {
    StyledLiveSports,
    StyledContent,
    StyledNavigation,
    StyledNavTabs,
    StyledNavTab,
    StyledNavTabIndicator,
    StyledDescription,
    StyledLogoList,
    StyledLogo
} from './style';

const contents = [
    {
        title: "Live Sports",
        text: "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
        logos: ["/1/1.png", "/1/2.png", "/1/3.png", "/1/4.png"]
    },
    {
        title: "Breaking News",
        text: "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
        logos: ["/2/1.png", "/2/2.svg", "/2/3.svg", "/2/4.png"]
    },
    {
        title: "Live Sports",
        text: "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
        logos: ["/3/1.png", "/3/2.png", "/3/3.png", "/3/4.png"]
    }
];

const LiveSports = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [bgImg, setBgImg] = useState("'/1b (1).jpg'");
    const tabIndicator = useRef();
    useEffect(() => {
        switch (selectedTab) {
            case 1:
                setBgImg("'/1b (1).jpg'");
                break;
            case 2:
                setBgImg("'/1b (2).jpg'");
                break;
            case 3:
                setBgImg("'/1b (3).jpg'");
                break;
            default:
                setBgImg("'/1b (1).jpg'");
        }
    }, [selectedTab]);
    const handleTabChange = (index) => () => {
        setSelectedTab(index);
        if (index === 2) {
            gsap.to(tabIndicator.current, {
                duration: 0.4,
                x: 108,
                width: "98px"
            });
        } else if (index === 1) {
            gsap.to(tabIndicator.current, {
                duration: 0.4,
                x: 0,
                width: "78px",
            });
        } else {
            gsap.to(tabIndicator.current, {
                duration: 0.4,

                x: 240,
                width: "98px"
            });
        }
    }
    return (
        <StyledLiveSports bgImg={bgImg}>
            <StyledContent>
                <StyledNavigation>
                    <StyledNavTabs>
                        <StyledNavTab
                            active={selectedTab === 1}
                            onClick={handleTabChange(1)}
                        >
                            LIVE SPORTS
                        </StyledNavTab>
                        <StyledNavTab
                            active={selectedTab === 2}
                            onClick={handleTabChange(2)}
                        >
                            BREAKING NEWS
                        </StyledNavTab>
                        <StyledNavTab
                            active={selectedTab === 3}
                            onClick={handleTabChange(3)}
                        >
                            BIGGEST EVENTS
                        </StyledNavTab>
                    </StyledNavTabs>
                    <StyledNavTabIndicator ref={tabIndicator} />
                </StyledNavigation>
                <Description
                    text={contents[selectedTab - 1].text}
                    logos={contents[selectedTab - 1].logos}
                    title={contents[selectedTab - 1].title}
                />
            </StyledContent>
        </StyledLiveSports>
    );
}
export default LiveSports;

const Description = ({ title, text, logos = [] }) => {
    return (
        <StyledDescription>
            <h1>{title}</h1>
            <h2>{text}</h2>
            <StyledLogoList>
                {
                    logos.map((logo, index) => (
                        <StyledLogo key={index}>
                            <img src={logo} />
                        </StyledLogo>
                    ))
                }
            </StyledLogoList>
            {/* <p>{notice}</p> */}
        </StyledDescription>
    );
}