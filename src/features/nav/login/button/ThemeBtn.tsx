// svg
import Sun from '@/shared/asset/icon/sun.svg?react'
// component
import { Box } from '@/shared/ui/Box'
// style
import { defaultBtn } from './btn.css'
import { usePopup } from '@/shared/lib/hooks/usePopup'
import { Popup } from '@/shared/ui/Popup'
import { Text } from '@/shared/ui/Text'
import { useRef } from 'react'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
/**
 * user theme 컴포넌트
 * @returns {JsxElement}
 */
export const ThemeBtn: React.FC = () => {
    const { config, togglePopup, hidePopup } = usePopup()
    const ref = useRef<HTMLButtonElement>(null) // ref 설정
    useClickOutside(ref, hidePopup) // 팝업 외부 클릭시 팝업 닫기
    return (
        <Box
            as={'button'}
            className={defaultBtn}
            onClick={togglePopup}
            ref={ref}
        >
            <Sun width={20} height={20} />
            <Box>
                <Popup config={config}>
                    <Box style={{ width: '125px', padding: '2px 5px' }}>
                        <Text fontSize="subHeadline">
                            다크 모드는 준비중이에요!
                        </Text>
                    </Box>
                </Popup>
            </Box>
        </Box>
    )
}
