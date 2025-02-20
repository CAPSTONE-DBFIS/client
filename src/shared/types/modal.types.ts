export interface IModalConfig {
    // 모달이 열려있는지 여부
    open?: boolean
    // 모달 내부 버튼 유무
    showCloseButton?: boolean
    // 모달 내부 버튼 크기
    btnSize?: 24 | 32
    // 외부 클릭으로 모달 닫기
    outerTouchClose?: boolean
}

export interface IModalReturn {
    // @shared/lib/hooks/useModal 참고
    toggleModal: () => void
    showModal: () => void
    hideModal: () => void
    updateModalConfig: (config: Partial<IModalConfig>) => void
    modalConfig: IExtendedModalConfig
}
// close 추가한 모달 설정
export interface IExtendedModalConfig extends IModalConfig {
    handleClose: () => void
}

export type ModalProps = Readonly<IExtendedModalConfig>
