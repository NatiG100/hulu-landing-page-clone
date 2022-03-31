import styled from "@emotion/styled";

export const StyledAdvertisment = styled.div`
    width: 100%;
    height:max-content ;
    display:grid ;
    align-items: center;
    justify-content:center ;
    background-color: black;
    padding-top:60px;
    padding-bottom:100px;
    overflow-x: hidden;
`;
export const StyledTop = styled.div`
    max-width: 800px;
    align-self:center ;
    justify-self:center ;
    p{
        color:#1ce783;
        font-weight: 500;
        text-align:center ;
    }
    h1{
        margin:5px;
        color:white;
        font-size:70px ;
        font-weight:bolder ;
        text-align:center ;
    }
    h2{
        text-align:center ;
        color:white ;
        font-size:20px ;
        font-weight:normal ;
    }
`;
export const StyledShowCard = styled.div`
   position:relative ;
   width:300px;
   height: 435px;
`;
export const StyledCardForeground = styled.div`
    position: absolute;
    p{
        color:white;
        margin:0px;
    }
    h1{
        margin:0px ;
        color:white;
    }
    background-color:none ;
    top:20px;
    left:20px;
`;
export const StyledCardImage = styled.img`
    position:absolute ;
    top:0px;
    left: 0px;
    width:100% ;
    height:100% ;
`;

export const StyleedCardList = styled.div`
padding-top:20px;
    display:flex ;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow: hidden;
    gap:20px;
`;

export const StyledOverlay = styled.div`
    position: absolute; /* Sit on top of the page content */
    /* display: none; Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(#0008, #0000,#0008);
    cursor: pointer; 
`;