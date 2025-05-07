import { useState } from 'react'
// shared component
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Button } from '@/shared/ui/Button'
// svg
import UserName from '@/shared/asset/icon/user.svg?react'
import NickName from '@/shared/asset/icon/tag.svg?react'
import Mail from '@/shared/asset/icon/mail.svg?react'
// color token
import { colors } from '@/app/token'
// Step interface
import { IJoin } from '@/entities/user/join.type'
import { validForm } from '@/shared/lib/validForm'

/**
 * 회원가입 시작을 위한 사용자 인증 정보 입력 컴포넌트
 * @param {() => void} onNext 다음 스텝으로 이동하기 위한 함수
 * @returns {JsxElement}
 */
export const SignupAttempt = ({
    onNext,
    formData,
    setFormData,
}: {
    onNext: () => void
    formData: IJoin
    setFormData: (formData: IJoin) => void
}) => {
    const [currentFormData, setCurrentFormData] = useState<IJoin>(formData)
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: keyof IJoin,
        type: 'text' | 'number' | 'all'
    ) => {
        let { value } = e.target

        if (type === 'number') {
            value = value.replace(/[^0-9]/g, '')
        } else if (type === 'text') {
            value = value.replace(/[^a-zA-Z가-힣\s]/g, '')
        }
        setCurrentFormData({
            ...currentFormData,
            [key]: value,
        })
    }

    const handleSubmit = () => {
        setFormData(currentFormData)
        onNext()
    }

    return (
        <Box>
            <Box
                as={'form'}
                display="flex"
                flexDirection="column"
                style={{ gap: '33px' }}
                onSubmit={handleSubmit}
            >
                <Box display="flex" justifyContent="center">
                    <Text
                        fontSize="title1"
                        fontWeight="medium"
                        color="teal-500"
                    >
                        회원가입
                    </Text>
                </Box>

                <Box
                    htmlFor="auth-singup-username"
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '6px' }}
                >
                    <Box display="flex" flexDirection="column">
                        <Text fontSize="title3">이름</Text>
                        <Text fontSize="caption" color="neutral-90">
                            성을 포함한 이름을 입력해주세요
                        </Text>
                    </Box>

                    <TextInput
                        placeholder="이름"
                        leftIcon={
                            <UserName
                                width={20}
                                height={20}
                                fill={colors['teal-500']}
                            />
                        }
                        width="280px"
                        name="username"
                        required={true}
                        value={currentFormData.name}
                        onChange={(e) => handleInputChange(e, 'name', 'text')}
                    />
                </Box>
                <Box
                    htmlFor="auth-singup-username"
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '6px' }}
                >
                    <Text fontSize="title3">닉네임</Text>
                    <Text fontSize="caption" color="neutral-90">
                        닉네임을 입력해주세요
                    </Text>
                    <TextInput
                        placeholder="닉네임"
                        leftIcon={
                            <NickName
                                width={20}
                                height={20}
                                fill={colors['teal-500']}
                            />
                        }
                        width="280px"
                        name="nickname"
                        required={true}
                        value={currentFormData.nickname}
                        onChange={(e) => handleInputChange(e, 'nickname', 'all')}
                    />
                </Box>
                <Box
                    htmlFor="auth-singup-username"
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '6px' }}
                >
                    <Text fontSize="title3">메일 주소</Text>
                    <Text fontSize="caption" color="neutral-90">
                        본인의 메일 주소(도메인 포함)를 입력해주세요.
                    </Text>
                    <TextInput
                        placeholder="메일"
                        leftIcon={
                            <Mail
                                width={20}
                                height={20}
                                fill={colors['teal-500']}
                            />
                        }
                        width="280px"
                        name="email"
                        type="email"
                        required={true}
                        value={currentFormData.email}
                        onChange={(e) => handleInputChange(e, 'email', 'all')}
                    />
                </Box>
                <Box
                    htmlFor="auth-singup-username"
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '6px' }}
                >
                    <Text fontSize="title3">아이디</Text>
                    <Text fontSize="caption" color="neutral-90">
                        본인의 아이디를 입력해주세요.
                    </Text>
                    <TextInput
                        placeholder="아이디"
                        leftIcon={
                            <Mail
                                width={20}
                                height={20}
                                fill={colors['teal-500']}
                            />
                        }
                        width="280px"
                        name="email"
                        type="email"
                        required={true}
                        value={currentFormData.id}
                        onChange={(e) => handleInputChange(e, 'id', 'all')}
                    />
                </Box>
                <Button
                    type="primary"
                    size="medium"
                    onClickFunc={() => handleSubmit()}
                    disabled={
                        !validForm(currentFormData, [
                            'name',
                            'nickname',
                            'email',
                            'id',
                        ])
                    }
                >
                    회원가입
                </Button>
            </Box>
        </Box>
    )
}
