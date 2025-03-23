import { Box } from '@/shared/ui/Box'
import * as style from './sidebar-footer.css'
import { Text } from '../Text'
import User from '@/shared/asset/icon/user.svg?react'
import Logout from '@/shared/asset/icon/logout.svg?react'
import Setting from '@/shared/asset/icon/cog.svg?react'
import { useState } from 'react'

export const SidebarFooter = () => {
    const [hoverUser, setHoverUser] = useState<boolean>(false)
    const footerBtn = ['settings', 'info', 'logout']
    const handleClick = (btn: string) => {
        console.log(btn)
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={style.footer}
        >
            <Box onClick={() => handleClick(footerBtn[0])}>
                <Text fontSize="body" className={style.footerItem}>
                    <Box className={style.circle}>
                        <Setting />
                    </Box>
                    설정
                </Text>
            </Box>

            <Box
                onMouseEnter={() => setHoverUser(true)}
                onMouseLeave={() => setHoverUser(false)}
            >
                {!hoverUser ? (
                    <Text fontSize="body" className={style.footerItem}>
                        <Box className={style.circle}>
                            <Box className={style.user} />
                        </Box>
                        사용자이름
                    </Text>
                ) : (
                    <Box
                        display="flex"
                        flexDirection="row"
                        className={style.footerItem}
                    >
                        <Box onClick={() => handleClick(footerBtn[1])}>
                            <Text className={style.footerText}>
                                <Box className={style.circle}>
                                    <User />
                                </Box>
                                프로필 보기
                            </Text>
                        </Box>
                        <Box onClick={() => handleClick(footerBtn[2])}>
                            <Text className={style.footerText}>
                                <Box className={style.circle}>
                                    <Logout />
                                </Box>
                                로그아웃
                            </Text>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}
