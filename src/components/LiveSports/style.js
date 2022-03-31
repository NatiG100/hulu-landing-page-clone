import styled from "@emotion/styled"

export const StyledLiveSports = styled.div`
    background-image:linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, 
    rgba(0, 0, 0, 0) 98.72%),url(${({ bgImg }) => bgImg});
    
    height:810px ;
    width:100% ;
    background-repeat:space ;
    background-size: cover;
    display:flex ;
    align-items:center ;
    padding:200px;
`;
export const StyledContent = styled.div`
max-width:500px ;
justify-content:left ;
display:flex ;
flex-direction:column ;
`;
export const StyledNavigation = styled.div`
    display:flex;
    flex-direction:column ;
    gap:15px;
`;
export const StyledNavTabs = styled.div`
display:flex ;
gap:35px;
align-items:center ;
`;
export const StyledNavTab = styled.p`
    margin:0px ;
    color:white;
    cursor: pointer;
    font-weight:700 ;
    font-size: 12px;
    opacity:${({ active }) => active ? "100%" : "60%"};
    :hover{
    opacity:${({ active }) => active ? "90%" : "50%"};
    }
`;
export const StyledNavTabIndicator = styled.div`
    height: 6px;
    width: 72px;
    background-color:white ;
`;


////////////////////////////////////
export const StyledDescription = styled.div`

`;
export const StyledLogoList = styled.div`
    display: flex;
    gap:30px;
`;
export const StyledLogo = styled.div`
    height:50px ;
    width:50px;
    border-radius:40px ;
    background-color: white;
    display:flex ;
    align-items: center;
    img{
        width:100% ;
    }
`;