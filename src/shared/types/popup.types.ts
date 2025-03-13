export interface IPopup {
    children?: React.ReactNode
    config: IExtendedPopupConfig
    TOP?: number
    LEFT?: number
}

export interface IPopupConfig {
    open: boolean
    type: configType
    SET_TIMER_MES: number
    arrow: arrow
}

export interface IExtendedPopupConfig extends IPopupConfig {
    handleClose: () => void
}

type configType = 'default' | 'timer'
type arrow = 'top' | 'bottom' | 'none'

export interface IPopupReturn {
    config: IExtendedPopupConfig
    showPopup: () => void
    hidePopup: () => void
    togglePopup: () => void
    updatePopupConfig: (config: Partial<IPopupConfig>) => void
}
