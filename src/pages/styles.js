import styled from "styled-components";

export const Container = styled.div`

`

export const ListPokemons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
`

export const Paragraph = styled.p`
    width: 150px;
    margin: 0;
    padding: 5px 0;
    font-size: 24px;
    border-radius: 5px;
    font-weight: bold;

    ::first-letter {
        text-transform: uppercase;
        font-size: 30px;
        font-weight: bold;
    }
`

export const ImgPokebola = styled.img`
    width: 100px;
`

