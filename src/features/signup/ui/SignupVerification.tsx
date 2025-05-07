// shared component
import { verifyCode } from '@/entities/user/api/join'
import { Box } from '@/shared/ui/Box'
import { Button } from '@/shared/ui/Button'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
import { useState } from 'react'

/**
 * 회원가입 사용자 인증을 위한 컴포넌트
 * @param {() => void} onNext 다음 스텝으로 이동하기 위한 함수
 * @returns {JsxElement}
 */
export const SignupVerification = ({
    onNext,
    id,
}: {
    onNext: () => void
    id: string
}) => {
    const [code, setCode] = useState(['', '', '', '', '', '', ''])
    const onHandleInput = (
        e: React.FormEvent<HTMLInputElement>,
        index: number
    ) => {
        const target = e.target as HTMLInputElement
        let value = target.value

        // 2자 이상 입력 시 첫 글자만 사용
        if (value.length > 1) {
            value = value.slice(0, 1)
            target.value = value // 강제 반영
        }

        // 상태 업데이트
        setCode((prev) => {
            const newCode = [...prev]
            newCode[index] = value
            return newCode
        })

        // 다음 칸으로 자동 포커스 이동 (선택 사항)
        if (value && target.nextElementSibling instanceof HTMLInputElement) {
            target.nextElementSibling.focus()
        }
    }
    const handleSubmit = async () => {
        try {
            const data = await verifyCode(id, code.join(''))
            if (data.status === 200) onNext()
        } catch {
            console.log('ERROR')
        }
    }
    const renderInputFields = () => {
        return Array.from({ length: 6 }, (_, index) => (
            <TextInput
                key={index}
                type="text"
                maxLength={1}
                onInput={(e) => onHandleInput(e, index)}
                placeholder=""
                size="large"
                height="64px"
                width="24px"
                textAlignment="center"
                value={code[index]}
                required={true}
            />
        ))
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
                {renderInputFields()}
            </Box>
            <Button type="primary" size="medium" onClickFunc={handleSubmit}>
                인증하기
            </Button>
        </Box>
    )
}
