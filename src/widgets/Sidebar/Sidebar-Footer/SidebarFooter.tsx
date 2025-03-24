import { Box } from '@/shared/ui/Box'
import * as style from './sidebar-footer.css'

import User from '@/shared/asset/icon/user.svg?react'
import Logout from '@/shared/asset/icon/logout.svg?react'
import Setting from '@/shared/asset/icon/cog.svg?react'
import { useState } from 'react'
import { Text } from '@/shared/ui/Text'

interface ISidebarFooter {
    userName: string
}

export const SidebarFooter = ({ userName }: ISidebarFooter) => {
    const [hoverUser, setHoverUser] = useState<boolean>(false)
    const footerBtn = ['info', 'logout']
    const handleClick = (btn: string) => {
        console.log(btn)
        // 설정 관련 기능 예정 설정으로 이동, 로그아웃
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={style.footer}
        >
            {/* 설정버튼 */}
            <Box onClick={() => handleClick(footerBtn[0])}>
                <Text fontSize="body" className={style.footerItem}>
                    <Box className={style.circle}>
                        <Setting />
                    </Box>
                    설정
                </Text>
            </Box>
            {/* 사용자 이름 컨테이너 */}
            <Box
                onMouseEnter={() => setHoverUser(true)} //호버시 hoverUser상태를 true로 설정
                onMouseLeave={() => setHoverUser(false)} //호버 벗어날시 hoverUser 상태를 false로 설정
            >
                {!hoverUser ? (
                    // 기본 상태: hoverUser가 false일 때 사용자 이름이 표시됨
                    <Text fontSize="body" className={style.footerItem}>
                        <Box className={style.circle}>
                            <Box className={style.user} />
                        </Box>
                        {userName}
                    </Text>
                ) : (
                    // 프로필보기/로그아웃 버튼
                    <Box
                        display="flex"
                        flexDirection="row"
                        className={style.footerItem}
                    >
                        <Box onClick={() => handleClick(footerBtn[0])}>
                            <Text className={style.footerText}>
                                <Box className={style.circle}>
                                    <User />
                                </Box>
                                프로필 보기
                            </Text>
                        </Box>
                        <Box onClick={() => handleClick(footerBtn[1])}>
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
