// svg
import Arrow from '@/shared/asset/icon/cheveron-down.svg?react'
// component
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { Popup } from '@/shared/ui/Popup'
// style
import {
    profileImgBox,
    profileOptionBox,
    profileOptionMenu,
    profileOptionMenuCell,
} from './profile.css'
// hooks
import { usePopup } from '@/shared/lib/hooks/usePopup'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
import { useRef } from 'react'
// svgs
import Cog from '@/shared/asset/icon/cog.svg?react'
import Call from '@/shared/asset/icon/phone.svg?react'
import Guide from '@/shared/asset/icon/color-swatch.svg?react'
import Logout from '@/shared/asset/icon/logout.svg?react'
import { Link } from 'react-router-dom'

export const ProfileOption = () => {
    const { config, togglePopup, hidePopup } = usePopup({ arrow: 'none' })
    const ref = useRef<HTMLButtonElement>(null)
    useClickOutside(ref, hidePopup)
    return (
        <Box
            display="flex"
            alignItems="center"
            className={profileOptionBox}
            ref={ref}
        >
            <Box as={'button'} className={profileImgBox} onClick={togglePopup}>
                <img src="" alt="" />
            </Box>
            <Arrow style={config.open ? { rotate: '180deg' } : {}} />
            <Box>
                <Popup config={config} LEFT={-100} TOP={30}>
                    <ProfileOptionMenu />
                </Popup>
            </Box>
        </Box>
    )
}

const menu_list = [
    {
        logo: <Cog width={16} height={16} />,
        name: '환경설정',
        to: '/setting',
        id: 'nav:po:setting',
    },
    {
        logo: <Call width={16} height={16} />,
        name: '고객센터',
        to: '/help',
        id: 'nav:po:help',
    },
    {
        logo: <Guide width={16} height={16} />,
        name: '가이드',
        to: '/guide',
        id: 'nav:po:guide',
    },
]

export const ProfileOptionMenu = () => {
    return (
        <Box as={'ul'} className={profileOptionMenu}>
            {menu_list.map((menu) => (
                <Link to={menu.to} key={menu.id}>
                    <Box as={'li'} className={profileOptionMenuCell}>
                        {menu.logo}
                        <Text fontSize="subHeadline">{menu.name}</Text>
                    </Box>
                </Link>
            ))}
            <Box
                as={'li'}
                className={profileOptionMenuCell}
                key={'nav:po:logout'}
            >
                <Logout />
                <Text fontSize="subHeadline">로그아웃</Text>
            </Box>
        </Box>
    )
}
