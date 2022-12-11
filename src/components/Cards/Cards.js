import * as S from './styles'

const Card = ({ image, action, info, id, color }) => {
    return (
        <S.Button background={color} onClick={action} key={id}>
            <S.ImgPokemon src={image} />
            <S.Paragraph>{info}</S.Paragraph>
        </S.Button>
    )
}

export default Card