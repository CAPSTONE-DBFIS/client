// svg
import Calnedar from '@/shared/asset/icon/Calendar--Streamline-Tabler-Filled.svg?react'
// component
import { Box } from '@/shared/ui/Box'
// style
import { defaultBtn } from './btn.css'

/**
 * user Calendar 컴포넌트
 * @returns {JsxElement}
 */
export const CalendarBtn: React.FC = () => {
    return (
        <Box as={'button'} className={defaultBtn}>
            <Calnedar width={20} height={20} />
        </Box>
    )
}
