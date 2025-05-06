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
// api
import { login } from '@/shared/api/auth'
// hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 로그인 컴포넌트
 * @returns {jsxElement}
 */
export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await login({ email, password })
            localStorage.setItem('token', response.data.token)
            navigate('/')
        } catch {
            setError('이메일 또는 비밀번호가 올바르지 않습니다.')
        }
    }

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
                onSubmit={handleSubmit}
            >
                <TextInput
                    leftIcon={
                        <Mail
                            width={20}
                            height={20}
                            fill={colors['teal-500']}
                        />
                    }
                    placeholder="이메일"
                    type="email"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <Text color="red-300" fontSize="caption">
                        {error}
                    </Text>
                )}
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
