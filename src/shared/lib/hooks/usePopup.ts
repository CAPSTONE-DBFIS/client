import { useState } from 'react'
import {
    IExtendedPopupConfig,
    IPopupConfig,
    IPopupReturn,
} from '@/shared/types/popup.types'

const defaultConfig: IPopupConfig = {
    open: false,
    type: 'default',
    SET_TIMER_MES: 3000,
    arrow: 'top',
}

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
