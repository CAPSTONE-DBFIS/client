// components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { navList } from './token'
// svg
import Logo from '@/shared/asset/image/logo.svg?react'
// react hooks
import { useLocation, useNavigate } from 'react-router-dom'
// style
import { listBox, listText, logoBox, navContainer, ulBox } from './nav.css'

/**
 * Custom Navigate 컴포넌트
 * @returns {JsxElement}
 */
export const Nav = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavigate = (locate: string, path: string) => {
        if (!locate.startsWith(path)) navigate(path)
    }

    return (
        <Box as={'nav'} display="flex" className={navContainer}>
            <Box
                onClick={() => handleNavigate(location.pathname, '/')}
                className={logoBox}
            >
                <Logo />
            </Box>
            <Box as={'ul'} display="flex" alignItems="center" className={ulBox}>
                {navList.map((item) => {
                    return (
                        <Box
                            as={'li'}
                            key={item.key}
                            onClick={() =>
                                handleNavigate(location.pathname, item.url)
                            }
                            className={listBox}
                        >
                            <Text
                                fontSize="title2"
                                style={
                                    location.pathname.startsWith(item.url)
                                        ? listText.selected
                                        : listText.default
                                }
                            >
                                {item.name}
                            </Text>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
