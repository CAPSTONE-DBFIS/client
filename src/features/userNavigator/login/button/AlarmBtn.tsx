// svg
import Bell from '@/shared/asset/icon/bell.svg?react'
// component
import { Box } from '@/shared/ui/Box'
// style
import { defaultBtn } from './btn.css'

/**
 * user Alarm 컴포넌트
 * @returns {JsxElement}
 */
export const AlarmBtn: React.FC = () => {
    return (
        <Box as={'button'} className={defaultBtn}>
            <Bell width={20} height={20} />
        </Box>
    )
}
