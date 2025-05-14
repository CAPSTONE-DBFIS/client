// react
import { useEffect, forwardRef } from 'react'
// component
import { Box } from '../Box'
// css
import { popupAnimation, popupArrow } from './popup.css'
// type
import { PopupProps } from '@/shared/types/popup.types'

/**
 * Popup 컴포넌트
 * @param {React.ReactNode} children children(optional)
 * @param {usePopup} config Popup 설정 객체(required)
 * @param {number} TOP css - position - top(optional)
 * @param {number} LEFT css - position - left(optional)
 * @returns {JsxElement}
 */
export const Popup = forwardRef<HTMLDivElement, PopupProps>(
    ({ children, config, TOP = 0, LEFT = 0 }, ref) => {
        useEffect(() => {
            if (config.type === 'timer') {
                config.handleClose()
            }
        }, [config])

        if (!config.open) return null

        return (
            <Box style={{ position: 'relative' }} ref={ref}>
                <Box
                    className={`${popupArrow[config.arrow]} ${popupAnimation}`}
                    style={{ top: `${TOP}px`, left: `${LEFT}px` }}
                >
                    {children}
                </Box>
            </Box>
        )
    }
)