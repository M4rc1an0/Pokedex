import styled from "styled-components";

const typePokemon = (props) => {
    switch (props.background)  {
        case 'fire': return {backgroundType: '#b12327'};
        case 'dragon': return {backgroundType: '#ffae00'};
        case 'bug': return {backgroundType: '#bee3f3'};
        case 'dark': return {backgroundType: '#333333'};
        case 'electric': return {backgroundType: '#eed321'};
        case 'fairy': return {backgroundType: '#f9b4e0'};
        case 'fighting': return {backgroundType: '#d17d30'};
        case 'flying': return {backgroundType: '#d9dee0'};
        case 'ghost': return {backgroundType: '#660066'};
        case 'grass': return {backgroundType: '#669933'};
        case 'ground': return {backgroundType: '#9f6411'};
        case 'ice': return {backgroundType: '#bee3f3'};
        case 'normal': return {backgroundType: '#bfa38a'};
        case 'poison': return {backgroundType: '#ab00ba'};
        case 'psychic': return {backgroundType: '#d837e6'};
        case 'rock': return {backgroundType: '#797979'};
        case 'steel': return {backgroundType: '#999999'};
        case 'water': return {backgroundType: '#20afed'};
    }
}

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Info = styled.div`
    width: 50%;
    border-radius: 10px;
    background: ${(props) => typePokemon(props)?.backgroundType ? typePokemon(props)?.backgroundType : "#fff"};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Stats = styled.div`
    width: 50%;
    border-radius: 10px;
    background: ${(props) => typePokemon(props)?.backgroundType ? typePokemon(props)?.backgroundType : "#fff"};

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Paragraph = styled.div`
    font-size: 20px;
    ::first-letter {
        text-transform: uppercase;
    }
`

export const StatsPokemon = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
`

export const ParagraphName = styled.div`
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

    ::first-letter {
        text-transform: uppercase;
    }
`

export const LeavePokemon = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const IconLeave = styled.div`
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
`

export const Ul = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Li = styled.div`
    display: flex;
    margin: 5px 0;
`

export const typeContent = styled.div`
    padding: 5px 10px;
    color: #fff;
    background: ${(props) => typePokemon(props)?.backgroundType ? typePokemon(props)?.backgroundType : "#fff"};
    ::first-letter {
        text-transform: uppercase;
    }
`

export const ImgPokemon = styled.img`
    width: 150px;
`