import * as S from './styles'

const ProgressBar = ({ value, color }) => {
    return (
        <S.Container>
            <S.ContentProgress>
                <S.ValueStats progress={value} background={color}>
                    <S.BaseStats>{value}</S.BaseStats>
                </S.ValueStats>
            </S.ContentProgress>
        </S.Container >
    )
}

export default ProgressBar