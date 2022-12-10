import styled from "styled-components";

const typePokemon = (props) => {
    switch (props.background) {
        case 'fire': return { backgroundType: '#b12327' };
        case 'dragon': return { backgroundType: '#ffae00' };
        case 'bug': return { backgroundType: '#95cde6' };
        case 'dark': return { backgroundType: '#333333' };
        case 'electric': return { backgroundType: '#eed321' };
        case 'fairy': return { backgroundType: '#f799d5' };
        case 'fighting': return { backgroundType: '#d17d30' };
        case 'flying': return { backgroundType: '#d9dee0' };
        case 'ghost': return { backgroundType: '#660066' };
        case 'grass': return { backgroundType: '#669933' };
        case 'ground': return { backgroundType: '#9f6411' };
        case 'ice': return { backgroundType: '#bee3f3' };
        case 'normal': return { backgroundType: '#bfa38a' };
        case 'poison': return { backgroundType: '#ab00ba' };
        case 'psychic': return { backgroundType: '#d837e6' };
        case 'rock': return { backgroundType: '#797979' };
        case 'steel': return { backgroundType: '#999999' };
        case 'water': return { backgroundType: '#20afed' };
        default: return { backgroundType: '#fff' }
    }
}

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Info = styled.div`
    width: 50%;
    border-radius: 5px;
    background: ${(props) => typePokemon(props)?.backgroundType ? typePokemon(props)?.backgroundType : "#fff"};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Stats = styled.div`
    padding: 0 30px;
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

    ::first-letter {
        text-transform: uppercase;
    }
`

export const ContentProgressStats = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContentStats = styled.div`
    width: 100%;
    margin: 5px 0;
`

export const ParagraphName = styled.div`
    padding: 0 20px;
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

export const Ul = styled.ul`
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Li = styled.li`
    display: flex;
    margin: 5px 0;
    list-style: none;
`

export const LiAbilities = styled.li`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5px 0;
    list-style: none;
`

export const TypeContent = styled.div`
    padding: 5px 10px;
    font-weight: 600;
    color: ${(props) => typePokemon(props)?.backgroundType ? "#fff" : "#000"};
    background: ${(props) => typePokemon(props)?.backgroundType ? typePokemon(props)?.backgroundType : "#fff"};
    
    ::first-letter {
        text-transform: uppercase;
    }
`

export const InfoContent = styled.div`
    margin: 5px 5px 5px 0;
    padding: 5px 10px;
    background: #CCCCCC;
    border-radius: 5px;

    ::first-letter {
        text-transform: uppercase;
    }
`

export const ImgPokemon = styled.img`
    width: 250px;
`