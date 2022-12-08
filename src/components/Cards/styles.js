import styled from "styled-components";

export const ImgPokemon = styled.img`
    width: 100px;
`

export const Paragraph = styled.p`
    width: 150px;
    margin: 0;
    padding: 5px 0;
    font-size: 24px;
    border-radius: 5px;

    ::first-letter {
        text-transform: uppercase;
        font-size: 26px;
    }
`

export const Button = styled.button`
width: 180px;
padding: 10px;
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
background-color: #c3cad7;
box-shadow:10px 10px 20px #888;
border: none;
border-radius: 5px;

:hover {
    background: ${(props) => props.background ? props.background : "#fff"};
}
`