import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'

import { Login } from '@/features/login/ui/Login'
import { Info } from '../info/Info'

import { pannel, toggleAuthContainer, content } from './toggleauth.css'

import { useState } from 'react'
import { PositionForm } from '@/features/signup/ui/UserDetails/PositionForm'

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
                {isToggleLeft ? <Login /> : <PositionForm />}
            </Box>
        </Box>
    )
}
