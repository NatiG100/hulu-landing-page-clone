import styled from "@emotion/styled"

export const StyledFooter = styled.div`
    padding-left:150px;
    padding-right:150px;
    background-color:#e8eaed ;
    color:#586174;
    margin-top:60px ;
`;
export const StyledFooterNavigation = styled.div`
display:grid ;
grid-template-columns:4fr 1fr 1fr ;
align-items:flex-start ;
padding-top:60px ;
padding-bottom: 80px;
width:100% ;
`;
export const StyledNavigationGroup = styled.div`
display:grid;
grid-template-columns:repeat(auto-fill, 10vw);
font-size:14px ;
h3{
    font-weight:500 ;
    padding-top:10px ;
    padding-bottom:10px ;
    grid-column: 1 / -1;
    margin:0px;
    color:black;
    font-size:12px ;
    text-transform:uppercase ;
}
a{
    cursor: pointer;
    padding-top:5px ;
    padding-bottom:5px ;
    :hover{
        color:#333 ;
    }
}
`;
export const StyledNavigationSubGroup = styled.div`
display:grid ;
height:max-content ;
`;
export const StyledDivider = styled.div`
width:100% ;
margin-top:10px ;
margin-bottom:10px ;
border-bottom:2px solid #2221 ;
`;
export const StyledSocialMediaList = styled.div`

display: grid;
grid-template-columns:repeat(4,max-content) ;
gap:40px;
align-items:center ;
margin-top:40px ;
margin-bottom:40px ;
svg{
    cursor: pointer;
}
`;
export const StyledLinks = styled.div`
width:100% ;
padding-bottom: 40px;
display:flex ;
align-items :center;
flex-wrap:wrap ;
gap:30px;
font-size:12px ;
a{
    margin:0px ;
    width:max-content ;
    cursor: pointer;
    padding-top:5px ;
    padding-bottom:5px ;
    :hover{
        color:#333 ;
    }
}
`;