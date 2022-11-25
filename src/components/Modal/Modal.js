import * as S from './styles'

const Modal = ({ children, action }) => {
    return (
        <S.OpacityModal>
            <S.Modal>
                <div>
                    {children}
                </div>
                <S.ButtonS onClick={action}>fechar</S.ButtonS>
            </S.Modal>
        </S.OpacityModal>
    )
}

export default Modal