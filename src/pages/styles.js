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
    box-shadow:10px 10px 20px #888;
    border: none;
    border-radius: 5px;

    /* :hover {
        background-image: ${(props) => props.background ? props.background : "#fff"};;
    } */
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

export const ImgPokebola = styled.img`
    width: 100px;
`

export const ImgPokemon = styled.img`
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
    background: #66bb6a;
    color: #fff;
    cursor: pointer;
    padding: 5px;
    border: none;

    border-radius: 5px;

    :hover {

    }
`

export const ImgLogo = styled.img`
    width: 140px;
`

export const Input = styled.input`
  background: #fff;
  color: #525865;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  line-height: 1.45;
  outline: none;
  padding: 5px;

    :hover {
        box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);    
    }
    :focus {
        color: #4b515d;
        border: 1px solid #B8B6B6;
        box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
`