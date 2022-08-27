import { useEffect } from 'react'
import * as S from './styles'

import { changeUser, logout, selectUser } from '../../redux/userSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [userLogget, setUserLogged] = useState(user)

    
    console.log(userLogget, 'USER')
  
    const handleLogin = () => {
      dispatch(changeUser(name))
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        setUserLogged(user)
    }, [user])

    return (
        <S.Container>
            <S.SideSpaces>
                <S.Column>
                    <S.ImgLogo src='./pokemon.png'/>
                </S.Column>
                <S.Column>

                </S.Column>
                <S.Column>
                {!userLogget.isLogged ? ( 
                        <>
                            <S.Input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                            <button onClick={handleLogin}>Login</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleLogout}>Sair</button>
                        </>
                    )}
                </S.Column>
            </S.SideSpaces>
        </S.Container>

    )
}

export default Header