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

export const Column = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const Align = styled.div`
    height: 100%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
`

export const ButtonS = styled.button`
    background: #ffcd02;
    color: #286efe;
    cursor: pointer;
    padding: 5px;
    border: 2px solid #286efe;
    border-radius: 5px;

    :hover {
        background: #ffcd02;
        border: 1px solid #fff;
        color: #fff;
    }
`

export const ImgLogo = styled.img`
    width: 140px;
`

export const Input = styled.input`
    padding: 5px;
    border: none;
    outline: none;
`