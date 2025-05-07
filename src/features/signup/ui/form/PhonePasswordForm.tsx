// shared component
import { Box } from '@/shared/ui/Box'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
//svg
import Phone from '@/shared/asset/icon/device-mobile.svg?react'
import Lock from '@/shared/asset/icon/lock-closed.svg?react'
import { colors } from '@/app/token'
import { IJoin } from '@/entities/user/join.type'
import { useState } from 'react'
import { validForm } from '@/shared/lib/validForm'
/**
 * 휴대폰 번호 및 비밀번호 입력 가입 폼
 * @returns {JsxElement}
 */
export const PhonePasswordForm = ({
    onNext,
    formData,
    setFormData,
}: {
    onNext: () => void
    formData: IJoin
    setFormData: (formData: IJoin) => void
}) => {
    const [currentFormData, setCurrentFormData] = useState<IJoin>(formData)
    const [currentPassword, setCurrentPassword] = useState<string>('')
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
        <Box display="flex" flexDirection="column" style={{ gap: '32px' }}>
            {/* 휴대폰 번호 */}
            <Box
                htmlFor="auth-singup-username"
                display="flex"
                flexDirection="column"
                style={{ gap: '6px' }}
            >
                <Box display="flex" flexDirection="column">
                    <Text fontSize="title3">휴대폰 번호</Text>
                    <Text fontSize="caption" color="neutral-90">
                        전화번호를 입력해주세요.
                    </Text>
                </Box>

                <TextInput
                    placeholder="휴대폰 번호"
                    leftIcon={
                        <Phone
                            width={20}
                            height={20}
                            fill={colors['teal-500']}
                        />
                    }
                    width="280px"
                    name="auth-singup-username"
                    required={true}
                    type="tel"
                    value={currentFormData.phone}
                    onChange={(e) => handleInputChange(e, 'phone', 'number')}
                />
            </Box>
            <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
                {/* 비밀번호, 비밀번호 재확인 */}
                <Box
                    htmlFor="auth-singup-username"
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '6px' }}
                >
                    <Box display="flex" flexDirection="column">
                        <Text fontSize="title3">비밀번호</Text>
                        <Text fontSize="caption" color="neutral-90">
                            영문, 숫자, 특수문자를 조합하여
                            <br />
                            최소 8자리 이상의 길이로 구성해주세요
                        </Text>
                    </Box>

                    <TextInput
                        placeholder="비밀번호"
                        leftIcon={
                            <Lock
                                width={20}
                                height={20}
                                fill={colors['teal-500']}
                            />
                        }
                        width="280px"
                        name="auth-singup-username"
                        required={true}
                        type="password"
                        value={currentFormData.password}
                        onChange={(e) =>
                            handleInputChange(e, 'password', 'all')
                        }
                    />
                </Box>
                <Box
                    htmlFor="auth-singup-username"
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '6px' }}
                >
                    <Box display="flex" flexDirection="column">
                        <Text fontSize="title3">비밀번호 재입력</Text>
                        <Text fontSize="caption" color="neutral-90">
                            입력하신 비밀번호를 한번 더 입력해주세요.
                        </Text>
                    </Box>

                    <TextInput
                        placeholder="비밀번호 재입력"
                        leftIcon={
                            <Lock
                                width={20}
                                height={20}
                                fill={colors['teal-500']}
                            />
                        }
                        width="280px"
                        name="auth-singup-username"
                        required={true}
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </Box>
            </Box>
            <Button
                size="medium"
                type="primary"
                onClickFunc={handleSubmit}
                disabled={
                    !validForm(currentFormData, ['phone', 'password']) ||
                    !(currentPassword === currentFormData.password)
                }
            >
                계속하기
            </Button>
        </Box>
    )
}
