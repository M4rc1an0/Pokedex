import styled from "styled-components";

// const typePokemon = (props) => {
//     if(props.background === 'fire') {
//         return {
//             backgroundType: '#e0792f'
//         }
//     }
// }

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Info = styled.div`
    width: 50%;
    background: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Paragraph = styled.div`
    font-size: 20px;
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

export const Ul = styled.div`

`

export const Li = styled.div`

`

export const ImgPokemon = styled.img`
    width: 200px;
`