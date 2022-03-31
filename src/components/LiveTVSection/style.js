import styled from "@emotion/styled";

export const StyledLiveTVSection = styled.div`
    background-color:#151516 ;
    width: 100%;
    padding:100px;
    display:flex ;
    justify-content:center ;
    align-items:center ;
`;
export const StyledContent = styled.div`
    display:flex ;
    flex-direction:column ;
    max-width:720px ;
    gap:20px;
    p{
        text-align: center;
        margin:0px;
        color:#fff8;
        font-size:12px ;
    }
    h1{
        text-align: center;
        color:white;
        margin:0px;
        font-size:58px ;
        font-weight:900 ;
    }
    h2{
        text-align: center;
        color:white;
        margin:0px;
        font-weight:400 ;
        font-size: 25px;
    }
    h4{
        text-align:center;
        margin:0px;
        color:#1ce783 ;
    }
    a{
        text-decoration:underline ;
        cursor:pointer ;
        
    }
    svg{
        cursor: pointer;
        height: 11px;
        *{
            stroke:white;
            stroke-width:2px;
        }
    }
    
`;
export const StyledIconButton = styled.div`
`;
export const StyledLink = styled.a`
    text-align:center ;
    color:white;
    color:#fff8;
    margin:10px;
`;