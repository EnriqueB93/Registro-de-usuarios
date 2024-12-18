import styled from "styled-components";

export const Container = styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 20px;
gap: 40px;

`


export const CartUsers = styled.div`
background-color: #252d48;
padding: 16px;
border-radius: 36px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
max-width: 400px;

h3{
    color: #fff;
    font-size: 18px;
    margin-bottom: 4px;
    text-transform: capitalize;
}
p{
    color: #fff;
    font-size: 14px;
    font-weight:200;
}



`
export const ContainerUser = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;


@media (max-width:760px )  {

    grid-template-columns: 1fr;
}

`
export const TrasIcom = styled.img`

padding-left:30px ;
cursor: pointer;

    &:hover{
        opacity: 0.8;

    }

    &:active{
        opacity: 0.6;
    }

`

export const Avataruser = styled.img`
width: 80px;
border-radius: 50%;

`