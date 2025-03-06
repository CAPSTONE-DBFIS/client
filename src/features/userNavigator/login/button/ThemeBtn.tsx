// svg
import Sun from '@/shared/asset/icon/sun.svg?react'
// component
import { Box } from '@/shared/ui/Box'
// style
import { defaultBtn } from './btn.css'

/**
 * user theme 컴포넌트
 * @returns {JsxElement}
 */
export const ThemeBtn: React.FC = () => {
    return (
        <Box as={'button'} className={defaultBtn}>
            <Sun width={20} height={20} />
        </Box>
    )
}
