import * as S from './styles'

// import { useEffect } from 'react'
// import { changeUser, logout, selectUser } from '../../redux/userSlice';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

const Header = ({children}) => {
    // const user = useSelector(selectUser)
    // const dispatch = useDispatch()

    // const [userLogget, setUserLogged] = useState(user)

    // const handleLogin = () => {
    //     dispatch(changeUser(name))
    // }

    // const handleLogout = () => {
    //     dispatch(logout())
    // }

    // useEffect(() => {
    //     setUserLogged(user)
    // }, [user])

    return (
        <S.Container>
            <S.SideSpaces>
                                    {/* {!userLogget.isLogged ? ( 
                        <S.Align>
                            <S.Input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                            <S.Button onClick={handleLogin}>Login</S.Button>
                        </S.Align>
                    ) : (
                        <S.Align>
                            {userLogget.user}
                            <S.Button onClick={handleLogout}>Sair</S.Button>
                        </S.Align>
                    )} */}
            </S.SideSpaces>
        </S.Container>

    )
}

export default Header