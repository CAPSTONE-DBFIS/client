import { shadows } from '@/app/token'
import { Box } from '../Box'
import { popupContainer } from './popup.css'

export interface IPopup {
    children?: React.ReactNode
    shadow?: keyof typeof shadows
    type?: 'default' | 'instnace'
    arrow?: 'up'
}

export const Popup = ({ children, shadow = 'large' }: IPopup) => {
    return (
        <Box style={{ boxShadow: shadows[shadow] }} className={popupContainer}>
            {children}
        </Box>
    )
}
