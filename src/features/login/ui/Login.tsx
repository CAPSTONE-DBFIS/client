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
// hooks
import { useState } from 'react'
import { login } from '@/entities/user/api/login'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/entities/user/stores/AuthStore'

/**
 * 로그인 컴포넌트
 * @returns {jsxElement}
 */
export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await login({ id: email, password: password })
            if (response.status === 200) {
                console.log(response.data)
                useAuthStore.setState((prev) => ({
                    ...prev,
                    isLoggedIn: true,
                    memberId: email,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                    name: response.data.name,
                    department: response.data.department,
                }))
                navigate('/')
                window.location.reload()
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data)
                console.log(error.response?.data.message)
                setError(error.response?.data.message)
            } else {
                console.error(error)
            }
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
                    placeholder="아이디"
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
                <Box>
                    {error && (
                        <Text color="red-300" fontSize="caption">
                            {error}
                        </Text>
                    )}
                    <Box style={{ marginBottom: '20px', cursor: 'pointer' }}>
                        <Text color="neutral-200">아이디/비밀번호 찾기</Text>
                    </Box>
                </Box>
                <Button type="primary" size="medium">
                    로그인
                </Button>
            </Box>
        </Box>
    )
}
