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

export const Container = styled.div`
    display: flex;
    width: 100%;
`

export const ContentProgress = styled.div`
    height: 15px;
    width: 100%;
    background: #ccc;
    border-radius: 10px;
`

export const ValueStats = styled.div`
    height: 100%;
    width: ${(props) => props.progress ? `${props.progress}%` : '1%'};
    background: ${(props) => typePokemon(props)?.backgroundType ? typePokemon(props)?.backgroundType : "#fff"};
    border-radius: 10px;
`

export const BaseStats = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-left: 10px;
`