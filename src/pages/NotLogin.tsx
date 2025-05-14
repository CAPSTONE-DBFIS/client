import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import Icon from '@/shared/asset/icon/shield-check.svg?react'
import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'

export const NotLogin = () => {
    const navigate = useNavigate();
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent='center'
            alignItems="center"
            style={{ gap: '16px', padding: '40px 0', height: 'calc(100vh - 200px)' }}
        >
            <Box display="flex" alignItems="center" style={{ gap: '8px' }}>
                <Icon width={25} height={25} />
                <Text fontSize="title1" fontWeight="semibold">
                    접근 불가
                </Text>
            </Box>
            <Text color="neutral-100" fontSize='title3'>
                임직원을 위해 설계된 TRENDB는 보다 나은 서비스를 제공하기 위해
                비로그인 기능을 지원하지 않습니다.
            </Text>
            <Box style={{ width: '400px', gap: '12px' }} display='flex' flexDirection='column' >
                <Button type="primary" size="large" width="100%" onClickFunc={() => navigate('/auth', { replace: true, state: { mode: 'login' } })}>
                    로그인
                </Button>
                <Button type="tertiary" size="large" width="100%" onClickFunc={() => navigate('/auth', { replace: true, state: { mode: 'signup' } })}>
                    회원가입
                </Button>
            </Box>
        </Box>
    )
}
