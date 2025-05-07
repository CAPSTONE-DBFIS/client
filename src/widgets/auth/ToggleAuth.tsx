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
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export const ToggleAuth = () => {
    const [isToggleLeft, setIsToggleLeft] = useState(true)
    const location = useLocation();
    const [params, setParams] = useSearchParams()
    useEffect(() => {
        const {mode} = location.state;
        if(mode === 'signup') setIsToggleLeft(false);
    }, [location])

    const handleToggle = () => {
        if (params.size !== 0) {
            const result = confirm(
                '정말 전환하시겠습니까? - 기존 데이터는 모두 사라집니다.'
            )
            if (result === true) {
                setIsToggleLeft((prev) => !prev)
                setParams({}) // params 초기화
            }
        } else setIsToggleLeft((prev) => !prev)
    }
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
                    onClickFunc={handleToggle}
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
