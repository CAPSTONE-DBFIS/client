// shared component
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
// color token
import { colors } from '@/app/token'
// svg
import Check from '@/shared/asset/icon/check.svg?react'

/**
 * 회원가입 완료 컴포넌트
 * @returns {jsxElement}
 */
export const SignupSuccess = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ gap: '36px' }}
        >
            <Text fontSize="title1" color="teal-500">
                회원가입 완료
            </Text>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                style={{ gap: '48px' }}
            >
                <Box
                    background="neutral-30"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                    }}
                >
                    <Check width={20} height={20} fill={colors['teal-500']} />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    style={{ gap: '156px' }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        style={{ gap: '24px' }}
                    >
                        <Text fontSize="title2">
                            회원가입이&nbsp;
                            <Text
                                fontSize="title2"
                                color="teal-500"
                                fontWeight="semibold"
                            >
                                완료
                            </Text>
                            되었습니다
                        </Text>
                        <Text
                            color="neutral-300"
                            align="center"
                            fontSize="subHeadline"
                        >
                            TRENDB의 회원이 되신 것을 진심으로 환영합니다.
                            <br />
                            로그인을 통해 TRENDB만의 다양한 기능을 이용해보세요.
                        </Text>
                    </Box>
                    <Box display="flex" style={{ gap: '24px' }}>
                        <Button size="medium" type="tertiary" width="140px">
                            홈으로
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
