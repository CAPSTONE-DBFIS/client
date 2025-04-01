// step interface
import { IStepComponent } from '@/features/signup/type/funnel.type'
// shared component
import { Box } from '@/shared/ui/Box'
import { Button } from '@/shared/ui/Button'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'

/**
 * 회원가입 사용자 인증을 위한 컴포넌트
 * @param {() => void} onNext 다음 스텝으로 이동하기 위한 함수
 * @returns {JsxElement}
 */
export const SignupVerification = ({ onNext }: IStepComponent) => {
    const onHandleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (target.value.length > 1) {
            e.preventDefault()
            target.value = target.value.slice(0, 1)
        }
    }
    return (
        <Box
            as="div"
            display="flex"
            flexDirection="column"
            style={{ gap: '36px' }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                style={{ gap: '12px' }}
            >
                <Text fontSize="title1" color="teal-500">
                    인증번호 입력
                </Text>
                <Text fontSize="caption" color="neutral-90">
                    해당 이메일로 전송된 인증번호 4자리를 입력해주세요.
                </Text>
            </Box>

            <Box
                display="flex"
                justifyContent="space-around"
                style={{ gap: '8px' }}
            >
                <TextInput
                    type="text"
                    maxLength={1}
                    onInput={onHandleInput}
                    placeholder=""
                    size="large"
                    height="64px"
                    width="24px"
                    textAlignment="center"
                    required={true}
                />
                <TextInput
                    type="text"
                    maxLength={1}
                    onInput={onHandleInput}
                    placeholder=""
                    size="large"
                    height="64px"
                    width="24px"
                    textAlignment="center"
                    required={true}
                />
                <TextInput
                    type="text"
                    maxLength={1}
                    onInput={onHandleInput}
                    placeholder=""
                    size="large"
                    height="64px"
                    width="24px"
                    textAlignment="center"
                    required={true}
                />
                <TextInput
                    type="text"
                    maxLength={1}
                    onInput={onHandleInput}
                    placeholder=""
                    size="large"
                    height="64px"
                    width="24px"
                    textAlignment="center"
                    required={true}
                />
            </Box>
            <Button type="primary" size="medium" onClickFunc={onNext}>
                인증하기
            </Button>
        </Box>
    )
}
