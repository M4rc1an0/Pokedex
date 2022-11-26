import * as S from './styles'

const TableStats = ({info}) => {

    return (
        <S.Content>
            <S.Info>
                <S.ImgPokemon src={info.sprites.other.dream_world.front_default}/>
                <S.ParagraphName>{info.name}</S.ParagraphName>
            </S.Info>
            <S.Info>

            </S.Info>
        </S.Content>
    )
}

export default TableStats