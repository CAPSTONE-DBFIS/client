export type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default'

// 토스트 방향
export type ToastPosition = 'UP' | 'DOWN'

// 토스트 설정
export interface IToastList {
    toastConfig: IExtendedToastConfig
    toasts: toastProps[]
}

// 토스트 설정
export interface IToastConfig {
    autoClose?: number
    toastType?: ToastType
    toastPosition?: ToastPosition
}

// 토스트 설정 - removeIndexToast 확장
export interface IExtendedToastConfig extends IToastConfig {
    removeIndexToast: (index: number) => void
}

// 토스트리스트 컴포넌트 반환
export interface IToastListReturn {
    changeToastPosition: (position: ToastPosition) => void
    changeToastClose: (TOAST_MS: number) => void
    toastConfig: IExtendedToastConfig
    pushToast: (toast: toastProps) => number
    popToast: () => number
    getAllToast: () => toastProps[]
    removeIndexToast: (index: number) => number
    toasts: toastProps[]
}

// 토스트 배열
export type toastProps = {
    id: string
    message: string
}
