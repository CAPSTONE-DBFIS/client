// shared component
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
// feature component
import { Login } from '@/features/login/ui/Login'
import { Signup } from '@/features/signup/ui/Signup'
import { Info } from '../info/Info'
// style
import { pannel, toggleAuthContainer, content } from './toggleauth.css'
// hook
import { useState } from 'react'

export const ToggleAuth = () => {
    const [isToggleLeft, setIsToggleLeft] = useState(true)
    return (
        <Box className={toggleAuthContainer}>
            <Box className={isToggleLeft ? pannel.left : pannel.right}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Text color="neutral-50">미리 알아보는 트렌드</Text>
                    <Text fontSize="title1" color="white">
                        <Text
                            fontSize="title1"
                            color="white"
                            fontWeight="medium"
                        >{`TRENDB ${isToggleLeft ? '처음' : '회원'}`}</Text>
                        이신가요?
                    </Text>
                </Box>
                <Info />
                <Button
                    size="medium"
                    type="secondary"
                    onClickFunc={() => setIsToggleLeft((prev) => !prev)}
                >
                    <Box style={{ width: '204px', textAlign: 'center' }}>
                        {isToggleLeft ? '회원가입' : '로그인'}
                    </Box>
                </Button>
            </Box>
            <Box className={isToggleLeft ? content.right : content.left}>
                {isToggleLeft ? <Login /> : <Signup />}
            </Box>
        </Box>
    )
}
