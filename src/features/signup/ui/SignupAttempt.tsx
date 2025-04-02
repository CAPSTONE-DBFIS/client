// shared component
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Button } from '@/shared/ui/Button'
// svg
import UserName from '@/shared/asset/icon/user.svg?react'
import NickName from '@/shared/asset/icon/tag.svg?react'
import Birth from '@/shared/asset/icon/calendar.svg?react'
import Mail from '@/shared/asset/icon/mail.svg?react'
// color token
import { colors } from '@/app/token'
// Step interface
import { IStepComponent } from '@/features/signup/type/funnel.type'

/**
 * 회원가입 시작을 위한 사용자 인증 정보 입력 컴포넌트
 * @param {() => void} onNext 다음 스텝으로 이동하기 위한 함수
 * @returns {JsxElement}
 */
export const SignupAttempt = ({ onNext }: IStepComponent) => {
    return (
        <Box>
            <Box
                as={'form'}
                display="flex"
                flexDirection="column"
                style={{ gap: '33px' }}
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
                        name="auth-singup-username"
                        required={true}
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
                        name="auth-singup-username"
                        required={true}
                    />
                </Box>
                <Box
                    htmlFor="auth-singup-username"
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '6px' }}
                >
                    <Text fontSize="title3">생년월일</Text>
                    <Text fontSize="caption" color="neutral-90">
                        본인의 출생 생년월일을 입력해주세요
                    </Text>
                    <TextInput
                        placeholder="생년월일"
                        type="date"
                        leftIcon={
                            <Birth
                                width={20}
                                height={20}
                                fill={colors['teal-500']}
                            />
                        }
                        width="280px"
                        name="auth-singup-username"
                        required={true}
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
                        name="auth-singup-username"
                        type="email"
                        required={true}
                    />
                </Box>
                <Button type="primary" size="medium" onClickFunc={onNext}>
                    회원가입
                </Button>
            </Box>
        </Box>
    )
}
