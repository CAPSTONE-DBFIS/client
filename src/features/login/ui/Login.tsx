// shared component
import { Box } from '@/shared/ui/Box'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
// svg
import Mail from '@/shared/asset/icon/mail.svg?react'
import Password from '@/shared/asset/icon/lock-closed.svg?react'
// color token for svg
import { colors } from '@/app/token'

/**
 * 로그인 컴포넌트
 * @returns {jsxElement}
 */
export const Login = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ gap: '32px' }}
        >
            <Text fontSize="title1" color="teal-500">
                로그인
            </Text>
            <Box
                as={'form'}
                display="flex"
                flexDirection="column"
                style={{ width: '325px', gap: '10px' }}
            >
                <TextInput
                    leftIcon={
                        <Mail
                            width={20}
                            height={20}
                            fill={colors['teal-500']}
                        />
                    }
                    placeholder="아이디"
                    type="text"
                    required={true}
                />
                <TextInput
                    leftIcon={
                        <Password
                            width={20}
                            height={20}
                            fill={colors['teal-500']}
                        />
                    }
                    placeholder="비밀번호"
                    type="password"
                    required={true}
                />
                <Box style={{ marginBottom: '20px', cursor: 'pointer' }}>
                    <Text color="neutral-200">아이디/비밀번호 찾기</Text>
                </Box>
                <Button type="primary" size="medium">
                    로그인
                </Button>
            </Box>
        </Box>
    )
}
