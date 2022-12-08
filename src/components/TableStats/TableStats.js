import * as S from './styles'

const TableStats = ({info, close}) => {
    console.log(info)
    return (
        <S.Content>
            <S.Info background={info.types[0]?.type.name}>
                <S.ImgPokemon src={info.sprites.other.dream_world.front_default}/>
            </S.Info>
            <S.Stats>
                <S.LeavePokemon>
                    <S.IconLeave onClick={close}>X</S.IconLeave>
                </S.LeavePokemon>
                <S.ParagraphName>{info.name}</S.ParagraphName>
                <S.Ul>
                    <S.Li>
                        <S.StatsPokemon>Nome:</S.StatsPokemon>
                        <S.Paragraph>{info.name}</S.Paragraph>
                    </S.Li>
                    <S.Li>
                        <S.StatsPokemon>Tipo:</S.StatsPokemon>
                        <S.typeContent background={info.types[0]?.type.name}>{info.types[0]?.type.name}</S.typeContent>
                    </S.Li>
                </S.Ul>
            </S.Stats>
        </S.Content>
    )
}

export default TableStats