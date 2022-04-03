import styled from "@emotion/styled";

export const StyledLargeButton = styled.button`
    background-color:${({ color }) => color === "white" ? "white" : "black"};
    color:${({ color }) => color === "white" ? "black" : "white"};
    font-size: "16px";
    ${({ full }) => full && "width:100%;"}
    padding: ${({ padding }) => (padding)}px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius:5px ;
    border: none;
    font-weight:bold ;
    cursor: pointer;
    ${({ transition }) => transition && `transition:all 200ms ease-in;`}
    :hover{
        opacity:80% ;
    }
`;