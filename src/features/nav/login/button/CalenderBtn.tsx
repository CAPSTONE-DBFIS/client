// svg
import Calnedar from '@/shared/asset/icon/Calendar--Streamline-Tabler-Filled.svg?react'
// component
import { Box } from '@/shared/ui/Box'
import { CalendarPopup } from '@/features/calendar/CalendarPopup'
import { Popup } from '@/shared/ui/Popup'
// style
import { defaultBtn } from './btn.css'
// hooks
import { usePopup } from '@/shared/lib/hooks/usePopup'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
import { useRef } from 'react'

/**
 * user Calendar 컴포넌트
 * @returns {JsxElement}
 */
export const CalendarBtn: React.FC = () => {
    const { config, togglePopup, hidePopup } = usePopup()
    const ref = useRef<HTMLButtonElement>(null) // ref 설정
    useClickOutside(ref, hidePopup) // 팝업 외부 클릭시 팝업 닫기
    return (
        <Box
            as={'button'}
            className={defaultBtn}
            ref={ref}
            onClick={togglePopup}
        >
            <Calnedar width={20} height={20} />
            <Popup config={config}>
                <CalendarPopup />
            </Popup>
        </Box>
    )
}
