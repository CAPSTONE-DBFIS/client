import { useState } from 'react'
import {
    IExtendedPopupConfig,
    IPopupConfig,
    IPopupReturn,
} from '@/shared/types/popup.types'

// default popup 설정
const defaultConfig: IPopupConfig = {
    open: false,
    type: 'default',
    SET_TIMER_MES: 3000,
    arrow: 'top',
}

/**
 * Popup 컴포넌트를 제어하기 위한 커스텀 훅
 * @param {IPopupConfig} config 팝업 설정을 위한 객체(optional)
 * - [open=false] 팝업 열림 여부
 * - [type='default'] 팝업 유형
 * - [SET_TIMER_MS = 3000] timer 타입일 경우 제거될 시간(ms)
 * - [arrow='top'] 팝업 말풍선 형태
 * @returns {IPopupReturn}
 * - {IExtendedPopupConfig} config 팝업 설정을 위한 객체(required)
 * - {void} showPopup 팝업 오픈 함수(optional)
 * - {void} hidePopup 팝업 닫힘 함수(optional)
 * - {void} togglePopup 팝업 열고 닫힘 함수(optional)
 * - {void} updatePopupConfig 팝업 config 설정 변경 함수(optional)
 */
export const usePopup = (config?: Partial<IPopupConfig>): IPopupReturn => {
    const [modalConfig, setModalConfig] = useState<IPopupConfig>({
        ...defaultConfig,
        ...config,
    })

    // 팝업을 열거나 닫는 함수
    const togglePopup = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: !prev.open,
            }
        })
    }
    // 팝업을 열어주는 함수
    const showPopup = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: true,
            }
        })
    }
    // 팝업을 닫아주는 함수
    const hidePopup = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: false,
            }
        })
    }
    // 팝업 설정을 업데이트하는 함수
    const updatePopupConfig = (config: Partial<IPopupConfig>) => {
        setModalConfig((prev) => {
            return {
                ...prev,
                ...config,
            }
        })
    }
    // 팝업 함수 사용을 위한 모달 설정을 확장
    const extendConfig: IExtendedPopupConfig = {
        ...modalConfig,
        handleClose: hidePopup,
    }

    return {
        config: extendConfig,
        showPopup,
        hidePopup,
        togglePopup,
        updatePopupConfig,
    }
}
