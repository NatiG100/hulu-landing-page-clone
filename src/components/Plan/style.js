import styled from "@emotion/styled"

export const StyledPlan = styled.div`
    width: 100%;
    padding-top:80px;
    padding-bottom:20px ;
    display:flex ;
    justify-content:center ;
`;
export const StyledPlanContent = styled.div`
    width: 980px;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    color:#292C33;
    text-align:center ;
    *{
        margin:0px ;
    }
    p{
        font-size:25px ;
    }
    h1{
        font-size: 70px;
        font-weight:700 ;
    }
    em{
        font-style:normal;
        font-weight:900 ;
    }   
`;
export const StyledPlanHeader = styled.div`
    width:max-content ;
`;

export const StyledPlanTable = styled.div`
    width: 100%;
`;
export const StyledPlanTableHeader = styled.div`
    width:100% ;
    border-top: 1px solid #0002;
    border-bottom: 1px solid #0002;
    margin-top: 60px;
    padding-top:25px;
    padding-bottom: 25px;
    display:grid ;
    grid-template-columns:2fr 1fr 1fr 1fr ;
    gap:15px;
`;
export const StyledBundle = styled.div`
    max-width:250px ;
    *{
        text-align:left ;
    }
    display:flex ;
    flex-direction:column ;
    img{
        height:40px ;
        width:max-content ;
    }
    h2{
        font-size:30px ;
    }
    p{
        font-size:14px ;
        font-weight:400 ;
    }
`;

export const StyledBundleHeader = styled.div`
    display:flex ;
    align-items:center ;
    gap:20px;
    img{
        height: 16px;
    }
`;



///////////////SWITCH//////////////////
export const StyledSwitch = styled.div`
    cursor: pointer;
    margin-top:15px ;
    width:70px ;
    height:30px ;
    position:relative ;
`;
export const StyledSwitchRack = styled.div`
    width:100% ;
    height: 100%;
    position:absolute ;
    background-color:${({ isOn }) => isOn ? "black" : "#dedede"} ;
    top:0px ;
    left:0px ;
    border-radius:40px;
`;
export const StyledSwitchKnob = styled.div`
    background-color:white ;
    height: 32px;
    width:32px ;
    position:absolute ;
    box-shadow:0px 0px 7px #2224 ;
    top:-1px ;
    ${({ isOn }) => isOn ? "right:-1px;" : "left:-1px;"} 
    border-radius: 40px;
`;
////////////////////////////


//////////PLAN COLUMN HEADER///////////////
export const StyledPlanColumnHeader = styled.div`
    height: 100%;
    display:flex ;
    flex-direction:column ;
    gap:5px;
    justify-content:flex-end ;
    align-items:center ;
    *{
    }
    p{
        font-weight:700 ;
        font-size:15px ;
        color:#ababab
    }
    em{
        font-weight:700 ;

        color:#292C33;
        font-size:18px ;
    }
`;
export const StyledBadge = styled.div`
    width:max-content ;
    padding: 8px 20px 8px 20px;
    font-size: 11px;
    color:black;
    opacity:95% ;
    font-weight:700 ;
    background-color:#1ce783 ;
    border-radius:40px ;
    margin:15px;
`;


/////TABLE BODY///////
export const StyledPlanTableRow = styled.div`
    width:100% ;
    border-bottom: 1px solid #0002;
    padding-top:25px;
    padding-bottom: 25px;
    display:grid ;
    grid-template-columns:2fr 1fr 1fr 1fr ;
    gap:15px;
`;