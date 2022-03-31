import React from 'react';
import {
    StyledAdvertisment,
    StyledShowCard,
    StyledCardForeground,
    StyledCardImage,
    StyleedCardList,
    StyledTop,
    StyledOverlay
} from './style';

const Advertisment = () => {
    return (
        <StyledAdvertisment>
            <StyledTop>
                <p>INCLUDED IN ALL PLANS</p>
                <h1>All The TV You Love</h1>

                <h2>Stream full seasons of exclusive series,
                    current-season episods, hit movies, Hulu Originals,
                    Kids shows, and more.
                </h2>
            </StyledTop>
            <StyleedCardList>
                <ShowCard
                    category="Past & Current Season"
                    tag="TV Shows"
                    img={"1.jpg"}
                />
                <ShowCard
                    category="New & Classic"
                    tag="Movies"
                    img={"2.jpg"}
                />
                <ShowCard
                    category="Groundbreaking"
                    tag="Hulu Originals"
                    img={"3.jpg"}
                />
                <ShowCard
                    category="Add-on"
                    tag="Premiums"
                    img={"4.jpg"}
                />
            </StyleedCardList>
        </StyledAdvertisment>
    );
}

const ShowCard = ({ category, tag, img }) => {
    return (
        <StyledShowCard>
            <StyledCardImage src={img} alt={tag} />
            <StyledOverlay />
            <StyledCardForeground>
                <p>{category}</p>
                <h1>{tag}</h1>
            </StyledCardForeground>
        </StyledShowCard>
    );
}

export default Advertisment;