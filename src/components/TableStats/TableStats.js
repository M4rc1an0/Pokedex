import * as S from './styles'
import Close from '../../assets/icons/close'

const TableStats = ({ info, close }) => {
    console.log(info, 'INFO')
    return (
        <S.Content>
            <S.Info background={info.types[0]?.type.name}>
                <S.ImgPokemon src={info.sprites.other.dream_world.front_default} />
            </S.Info>
            <S.Stats>
                <S.LeavePokemon>
                    <S.IconLeave onClick={close}><Close /></S.IconLeave>
                </S.LeavePokemon>
                <S.ParagraphName>{info.name}</S.ParagraphName>
                <S.Ul>
                    <S.Li>
                        <S.StatsPokemon>Nome:</S.StatsPokemon>
                        <S.Paragraph>{info.name}</S.Paragraph>
                    </S.Li>
                    <S.Li>
                        <S.StatsPokemon>Tipo:</S.StatsPokemon>
                        <S.TypeContent background={info.types[0]?.type.name}>{info.types[0]?.type.name}</S.TypeContent>
                    </S.Li>
                    <S.StatsPokemon>Habilidades:</S.StatsPokemon>
                    <S.LiAbilities>
                        {info?.abilities.map(item => {
                            return (
                                <S.InfoContent>
                                    {item?.ability.name}
                                </S.InfoContent>
                            )
                        })}
                    </S.LiAbilities>
                    <S.Li>
                        <S.StatsPokemon>Altura:</S.StatsPokemon>
                        <S.Paragraph>{info.height}</S.Paragraph>
                    </S.Li>
                    <S.Li>
                        <S.StatsPokemon>Peso:</S.StatsPokemon>
                        <S.Paragraph>{info.weight}</S.Paragraph>
                    </S.Li>
                    {/* <S.Li>
                        <S.StatsPokemon>Tipo:</S.StatsPokemon>
                        <S.typeContent background={info.types[0]?.type.name}>{info.types[0]?.type.name}</S.typeContent>
                    </S.Li>
                    <S.Li>
                        <S.StatsPokemon>Tipo:</S.StatsPokemon>
                        <S.typeContent background={info.types[0]?.type.name}>{info.types[0]?.type.name}</S.typeContent>
                    </S.Li>
                    <S.Li>
                        <S.StatsPokemon>Tipo:</S.StatsPokemon>
                        <S.typeContent background={info.types[0]?.type.name}>{info.types[0]?.type.name}</S.typeContent>
                    </S.Li> */}
                </S.Ul>
            </S.Stats>
        </S.Content>
    )
}

export default TableStats