import { useState } from 'react'
import * as S from './Select.css'
import { Box } from '@/shared/ui/Box'
import ChevronDownIcon from '@/shared/asset/icon/cheveron-up.svg?react' // 선택 아이콘 예시
import { Text } from '@/shared/ui/Text'

interface CustomSelectProps {
    options: string[]
    value: string
    onChange: (val: string) => void
    placeholder?: string
}

export const CustomSelect = ({
    options,
    value,
    onChange,
    placeholder = '선택하세요',
}: CustomSelectProps) => {
    const [open, setOpen] = useState(false)

    return (
        <Box className={S.container}>
            <Box
                className={S.selectBox}
                onClick={() => setOpen((prev) => !prev)}
            >
                <Text fontSize="subHeadline">{value || placeholder}</Text>
                <ChevronDownIcon width={16} height={16} />
            </Box>
            {open && (
                <Box className={S.dropdown}>
                    {options.map((option) => (
                        <Box
                            key={option}
                            className={S.option}
                            onClick={() => {
                                onChange(option)
                                setOpen(false)
                            }}
                        >
                            <Text fontSize="subHeadline">{option}</Text>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    )
}
