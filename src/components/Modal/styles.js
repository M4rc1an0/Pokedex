import styled from "styled-components"

export const OpacityModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.8);
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    color: #000;
`

export const ButtonS = styled.button`
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

export const ContentModal = styled.div`
`