import * as S from './styles'
import ProgressBar from '../ProgressBar/ProgressBar'
import Close from '../../assets/icons/close'

const TableStats = ({ info, close }) => {
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
                        <S.StatsPokemon>Tipo:</S.StatsPokemon>
                        <S.TypeContent background={info.types[0]?.type.name}>{info.types[0]?.type.name}</S.TypeContent>
                    </S.Li>

                    {info.stats.map(stats => {
                        console.log(stats, 'STATUS')
                        return (
                            <S.ContentStats>
                                <S.StatsPokemon>{stats.stat.name}: </S.StatsPokemon>
                                <ProgressBar value={stats.base_stat} color={info.types[0]?.type.name} />
                            </S.ContentStats>
                        )
                    })}

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
                </S.Ul>
            </S.Stats>
        </S.Content>
    )
}

export default TableStats