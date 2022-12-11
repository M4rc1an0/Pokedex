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
                <S.Ul>
                    <S.LiParagraphName>{info.name}</S.LiParagraphName>
                    <S.Li>
                        <S.LiStatsPokemon>Tipo:</S.LiStatsPokemon>
                        <S.LiTypeContent background={info.types[0]?.type.name}>{info.types[0]?.type.name}</S.LiTypeContent>
                    </S.Li>
                    <S.UlContent>
                        {info.stats.map((stats, index) => {
                            return (
                                <S.ContentStats key={index}>
                                    <S.LiStatsPokemon>{stats.stat.name}: </S.LiStatsPokemon>
                                    <ProgressBar value={stats.base_stat} color={info.types[0]?.type.name} />
                                </S.ContentStats>
                            )
                        })}
                    </S.UlContent>
                    <S.LiStatsPokemon>Habilidades:</S.LiStatsPokemon>
                    <S.LiAbilities>
                        {info?.abilities.map((item, index) => {
                            return (
                                <S.InfoContent key={index}>
                                    {item?.ability.name}
                                </S.InfoContent>
                            )
                        })}
                    </S.LiAbilities>
                    <S.UlContent>
                        <S.Li>
                            <S.LiStatsPokemon>Altura:</S.LiStatsPokemon>
                            <S.Paragraph>{info.height}</S.Paragraph>
                        </S.Li>
                        <S.Li>
                            <S.LiStatsPokemon>Peso:</S.LiStatsPokemon>
                            <S.Paragraph>{info.weight}</S.Paragraph>
                        </S.Li>
                    </S.UlContent>
                </S.Ul>
            </S.Stats>
        </S.Content>
    )
}

export default TableStats