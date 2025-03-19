// svg
import Bell from '@/shared/asset/icon/bell.svg?react'
// component
import { Box } from '@/shared/ui/Box'
// style
import { defaultBtn } from './btn.css'
import { usePopup } from '@/shared/lib/hooks/usePopup'
import { Popup } from '@/shared/ui/Popup'
import { AlarmPopup } from '@/features/alarm/AlarmPopup'
import { useRef } from 'react'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'

/**
 * user Alarm 컴포넌트
 * @returns {JsxElement}
 */
export const AlarmBtn: React.FC = () => {
    const { config, togglePopup, hidePopup } = usePopup()

    const ref = useRef<HTMLDivElement>(null) // ref 설정
    useClickOutside(ref, hidePopup) // 팝업 외부 클릭시 팝업 닫기
    return (
        <Box
            as={'button'}
            className={defaultBtn}
            onClick={togglePopup}
            ref={ref}
        >
            <Bell width={20} height={20} />
            <Popup config={config}>
                <AlarmPopup />
            </Popup>
        </Box>
    )
}
