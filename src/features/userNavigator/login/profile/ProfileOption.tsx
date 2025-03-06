// svg
import Arrow from '@/shared/asset/icon/cheveron-down.svg?react'
// component
import { Box } from '@/shared/ui/Box'
// style
import { profileImgBox, profileOptionBox } from './profile.css'

export const ProfileOption = () => {
    return (
        <Box display="flex" alignItems="center" className={profileOptionBox}>
            <Box className={profileImgBox}>
                <img src="" alt="" />
            </Box>
            <Arrow />
        </Box>
    )
}
