import {
    IExtendedModalConfig,
    IModalConfig,
    IModalReturn,
} from '@/shared/types/modal.types'
import { useState } from 'react'

const defaultModalConfig: IModalConfig = {
    open: false,
    btnSize: 24,
    outerTouchClose: true,
}

/**
 * 동적 모달 관리를 위한 커스텀 훅
 * @param {IExtendedModalConfig} config 모달 기본 설정을 할 수 있는 객체(optional)
 * - [open=false]: 모달이 열려있는지 여부
 * - [showCloseButton=true]: 모달 내부 버튼 유무
 * - [btnSize=24]: 모달 내부 버튼 크기 (24, 32 only)
 * @returns {IModalReturn} 모달 설정을 변경할 수 있는 객체
 * - {void} toggleModal: 모달을 열거나 닫는 함수
 * - {void} showModal: 모달을 열어주는 함수
 * - {void} hideModal: 모달을 닫아주는 함수
 * - {void} updateModalConfig: 모달 설정을 업데이트하는 함수
 * - {object} modalConfig: 모달 설정 - 세부 타입 IModalConfig 참고
 */

const useModal = (config?: IModalConfig): IModalReturn => {
    const [modalConfig, setModalConfig] = useState<IModalConfig>({
        ...defaultModalConfig,
        ...config,
    })

    // 모달을 열거나 닫는 함수
    const toggleModal = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: !prev.open,
            }
        })
    }
    // 모달을 열어주는 함수
    const showModal = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: true,
            }
        })
    }
    // 모달을 닫아주는 함수
    const hideModal = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: false,
            }
        })
    }
    // 모달 설정을 업데이트하는 함수
    const updateModalConfig = (config: Partial<IModalConfig>) => {
        setModalConfig((prev) => {
            return {
                ...prev,
                ...config,
            }
        })
    }
    // 닫기 함수 사용을 위한 모달 설정을 확장
    const extendConfig: IExtendedModalConfig = {
        ...modalConfig,
        handleClose: hideModal,
    }
    // 모달 설정과 함수들을 반환
    return {
        toggleModal,
        showModal,
        hideModal,
        updateModalConfig,
        modalConfig: extendConfig,
    }
}

export { useModal }
