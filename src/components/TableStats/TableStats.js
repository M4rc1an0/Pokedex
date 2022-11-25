import * as S from './styles'

const TableStats = ({info}) => {
    console.log(info,  'INFORMAÇÕES')
    return (
        <S.Content>
            <S.Info>
                {info.name}
            </S.Info>
        </S.Content>
    )
}

export default TableStats