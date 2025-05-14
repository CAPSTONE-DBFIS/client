// shared component
import { verifyCode } from '@/entities/user/api/join'
import { Box } from '@/shared/ui/Box'
import { Button } from '@/shared/ui/Button'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
import { useRef, useState } from 'react'

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
    const inputArrRef = useRef<(HTMLInputElement | null)[]>([])
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

        if (value && index < inputArrRef.current.length - 1) {
            inputArrRef.current[index + 1]?.focus()
        }
    }
    const onHandleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === 'Backspace') {
            // 현재 칸이 비어 있으면 이전 칸으로 포커스
            if (code[index] === '' && index > 0) {
                inputArrRef.current[index - 1]?.focus()
            }
        }
    }
    console.log(inputArrRef)
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
                onChange={(e) => onHandleInput(e, index)}
                placeholder=""
                size="large"
                height="64px"
                width="48px"
                textAlignment="left"
                value={code[index]}
                required={true}
                ref={(el) => (inputArrRef.current[index] = el)}
                onkeyDown={(e) => onHandleKeyDown(e, index)}
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
                style={{ gap: '8px', width: '400px' }}
            >
                {renderInputFields()}
            </Box>
            <Button type="primary" size="medium" onClickFunc={handleSubmit}>
                인증하기
            </Button>
        </Box>
    )
}
