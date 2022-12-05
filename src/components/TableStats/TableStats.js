import * as S from './styles'

const TableStats = ({info}) => {
    console.log(info, 'INFORMAÇÕES')
    console.log(info.types[0]?.type.name, 'info.types[0]?.type.name')
    return (
        <S.Content>
            <S.Info background={info.types[0]?.type.name}>
                <S.ImgPokemon src={info.sprites.other.dream_world.front_default}/>
                <S.ParagraphName>{info.name}</S.ParagraphName>
            </S.Info>
            <S.Info>
                Testando
            </S.Info>
        </S.Content>
    )
}

export default TableStats