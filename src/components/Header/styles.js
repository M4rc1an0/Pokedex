import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: #c3cad7;
    border-bottom: 5px solid #000;
`

export const SideSpaces = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 0 150px;
`

export const Column = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const Align = styled.div`
    height: 100%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
`

export const Button = styled.button`
    background: #ffcd02;
    color: #286efe;
    cursor: pointer;
    padding: 5px;
    border: 2px solid #286efe;
    border-radius: 5px;

    :hover {
        background: #ffcd02;
        border: 1px solid #fff;
        color: #fff;
    }
`

export const ImgLogo = styled.img`
    width: 140px;
`

export const Input = styled.input`
    padding: 5px;
    border: none;
    outline: none;
`