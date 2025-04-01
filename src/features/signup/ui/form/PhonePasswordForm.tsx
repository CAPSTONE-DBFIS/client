// shared component
import { Box } from '@/shared/ui/Box'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
//svg
import Phone from '@/shared/asset/icon/device-mobile.svg?react'
import Lock from '@/shared/asset/icon/lock-closed.svg?react'
import { colors } from '@/app/token'
import { IStepComponent } from '@/features/signup/type/funnel.type'

/**
 * 휴대폰 번호 및 비밀번호 입력 가입 폼
 * @returns {JsxElement}
 */
export const PhonePasswordForm = ({ onNext }: IStepComponent) => {
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
                        해당 이메일로 전송된 인증번호 4자리를 입력해주세요.
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
                    />
                </Box>
            </Box>
            <Button size="medium" type="primary" onClickFunc={onNext}>
                계속하기
            </Button>
        </Box>
    )
}
