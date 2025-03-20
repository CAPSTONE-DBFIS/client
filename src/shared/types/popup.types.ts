// popup.jsx popup interface
export interface IPopup {
    children?: React.ReactNode
    config: IExtendedPopupConfig
    TOP?: number
    LEFT?: number
}

// popup config
export interface IPopupConfig {
    open: boolean
    type: configType
    SET_TIMER_MES: number
    arrow: arrow
}
// closing 추가된 config
export interface IExtendedPopupConfig extends IPopupConfig {
    handleClose: () => void
} //
// popup 유형
type configType = 'default' | 'timer'
// popup 말풍선 방향
type arrow = 'top' | 'bottom' | 'none'

// usePopup return
export interface IPopupReturn {
    config: IExtendedPopupConfig
    showPopup: () => void
    hidePopup: () => void
    togglePopup: () => void
    updatePopupConfig: (config: Partial<IPopupConfig>) => void
}
// popup.jsx properties
export type PopupProps = {
    children?: React.ReactNode
    config: IExtendedPopupConfig
    TOP?: number
    LEFT?: number
    ref?: React.RefObject<HTMLDivElement>
}
