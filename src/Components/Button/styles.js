import styled from "styled-components";

export const Button = styled.button`

padding: 10px 20px;
cursor: pointer;
border:${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")} ;
border-radius: 20px;
font-size: 16px;
background:${(props) => (props.theme === "primary" ? " linear-gradient(180deg,#fe7e5d 0%, #7f3841 100%)" : "transparent")};
color:#fff;

&:hover{
    opacity: 0.8;
    background-color: ${(props) => (props.theme === "primary" ? "none" : "#fff")} ;
    color: ${(props) => (props.theme === "primary" ? "#fff" : "#000")} ;
    transition: 0.8s;
}

&:active{
     opacity: 0.5;
    }

`;
