// components
import { Box } from '@/shared/ui/Box'
import { TPeBtn } from './button/TFBtn'
import { CalendarBtn } from './button/CalenderBtn'
import { ThemeBtn } from './button/ThemeBtn'
import { Profile } from './profile/Profile'
// stlye
import { btnBox, userNavContainer } from './loginedusernav.css'

export const LoginedUserNav = () => {
    return (
        <Box display="flex" alignItems="center" className={userNavContainer}>
            <Box display="flex" className={btnBox}>
                <ThemeBtn />
                <CalendarBtn />
                <TPeBtn />
            </Box>
            <Profile />
        </Box>
    )
}
