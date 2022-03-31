import styled from "@emotion/styled";

export const StyledHeader = styled.div`
    width:100% ;
    position:fixed ;
    height:100vh ;
    display:flex ;
    justify-content: center;
    align-items:center ;
    position:relative ;
`;
export const StyledMiniSection = styled.div`
display:flex;
width:max-content ;
align-items:center ;
gap:5px;
    p{
        color:#fff6;
        font-size:10px ;
    }
    a{
        cursor: pointer;
        color:#fff6;
        font-size:10px ;
        text-decoration: underline;
        font-weight:bold ;
    }
`;

export const StyledBrand = styled.img`
    height: 140px;
`;

export const StyledImage = styled.img`
    position:absolute ;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    z-index:-1;
    object-fit: cover;
    
`;

export const StyledForeground = styled.div`

display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
height:max-content ;
padding-left:340px;
padding-right:340px ;
/* max-width:700px ; */
    position:absolute;
    top:0px;
    left:0px;
    height: 100%;
    width:100%;
    z-index:1;
    p{
        font-size:12px ;
        font-weight: bold;
        color:#1ce783;
    }
    h2{
        color:white;
        text-align:center ;
        font-size:23px ;
    }
`;

export const StyledSignup = styled.div`
    a{
        color:white;
        text-decoration:underline ;
        font-weight:500 ;
        cursor: pointer;
    }
`;