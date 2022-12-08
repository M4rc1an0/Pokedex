import * as S from './styles'

const Header = ({ children }) => {
    return (
        <S.Container>
            <S.SideSpaces>
                {children}
            </S.SideSpaces>
        </S.Container>
    )
}

export default Header