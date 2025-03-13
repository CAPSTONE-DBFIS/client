// react
import { useEffect, useRef } from 'react'
// component
import { Box } from '../Box'
// css
import { popupArrow } from './popup.css'
// type
import { IPopup } from '@/shared/types/popup.types'

export const Popup: React.FC<IPopup> = ({
    children,
    config,
    TOP = 0,
    LEFT = 0,
}) => {
    const timerRef = useRef<number | null>(null) // timeout 설정 ref
    useEffect(() => {
        if (config.type === 'timer') {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            } // timeRef 초기화
            timerRef.current = setTimeout(() => {
                config.handleClose()
            }, config.SET_TIMER_MES) // timeout 설정
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current) // 언마운트시 제거
        }
    }, [config])
    if (!config.open) return null
    return (
        <Box style={{ position: 'relative' }}>
            <Box
                className={popupArrow[config.arrow]}
                style={{ top: `${TOP}px`, left: `${LEFT}px` }}
            >
                {children}
            </Box>
        </Box>
    )
}
