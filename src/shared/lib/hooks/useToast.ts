import {
    ToastPosition,
    IToastConfig,
    toastProps,
    IExtendedToastConfig,
    IToastListReturn,
} from '@/shared/types/toast.types'
import { useState } from 'react'

// default Toast Config 
const defaultToastConfig: IToastConfig = {
    autoClose: 300, // 300 MS
    toastType: 'default', // default 
    toastPosition: 'UP', // 'UP' | 'DOWN' 
}

/**
 * 토스트 메세지를 위한 shared 수준 커스텀 훅
 * @param {IToastConfig} config 토스트 기본 설정(optional)
 * - [autoClose= 300] 토스트 메세지 삭제 시간
 * - [toastType= 'default'] 토스트 설정 타입
 * - [toastPosition= 'UP'] 토스트 쌓이는 방향
 * @returns {IToastListReturn} 모달 설정 및 모달 설정 변경 함수
 * - changeToastPosition: 토스트 방향 변경 함수
 * - changeToastClose: 토스트 삭제 시간 변경 함수
 * - toastConfig: 설정과 삭제 함수가 추가된 설정
 * - pushToast: 토스트 추가 함수(push)
 * - popToast: 토스트 삭제 함수(pop)
 * - getAllToast: 토스트 배열 리턴
 * - removeIndexToast: 특정 인덱스 토스트 삭제 함수
 * - toasts: 토스트 배열
 */
export const useToast = (config?: IToastConfig) : IToastListReturn => {
    const [toastConfig, setToastsConfig] = useState<IToastConfig>({
        ...defaultToastConfig,
        ...config,
    }) // 토스트 기본 설정
    const [toastArr, setToastArr] = useState<toastProps[]>([]) // 토스트 배열
    
    // 토스트 방향 변경 함수
    const changeToastPosition = (position: ToastPosition) => {
        setToastsConfig((prev) => {
            return {
                ...prev,
                toastPosition: position,
            }
        })
    }

    // 토스트 추가 함수
    const pushToast = (toast: toastProps) => {
        const newState = [...toastArr, toast]
        setToastArr(newState)
        return newState.length
    }

    // 토스트 삭제 함수
    const popToast = () => {
        if (toastArr.length < 1) return 0
        const newState = toastArr.slice(0, -1)
        setToastArr(newState)
        return newState.length
    }
    
    // 토스트 배열 리턴 함수
    const getAllToast = () => {
        return toastArr
    }

    // 특정 인덱스 토스트 삭제 함수
    const removeIndexToast = (index: number) => {
        if (toastArr.length < index) return 0
        const newState = [...toastArr]
        console.log(index, newState.splice(index, 1))
        setToastArr(newState)
        return index
    }

    // 토스트 삭제 시간 변경 함수
    const changeToastClose = (TOAST_MS: number) => {
        setToastsConfig((prev) => {
            return {
                ...prev,
                autoClose: TOAST_MS,
            }
        })
    }

    // 확장 토스트 설정
    const extendedToastConfig: IExtendedToastConfig = {
        ...toastConfig,
        removeIndexToast: removeIndexToast,
    }

    return {
        changeToastPosition,
        changeToastClose,
        toastConfig: extendedToastConfig,
        pushToast,
        popToast,
        getAllToast,
        removeIndexToast,
        toasts: toastArr,
    }
}
