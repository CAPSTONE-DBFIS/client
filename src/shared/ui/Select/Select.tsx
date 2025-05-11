import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './Select.css'
import { ReactElement, useId, useRef, useState } from 'react'
// svgs
import Down from '@/shared/asset/icon/cheveron-down.svg?react'
import Up from '@/shared/asset/icon/cheveron-up.svg?react'

interface ISelect<T extends readonly string[]> {
    currentValue: T[number] | ''
    options: T
    setValue: (value: T[number]) => void
    Icon?: ReactElement
    width?: string
    height?: string
}

/**
 * select, option을 합친 커스텀 공통 컴포넌트
 * @param {string} currentValue [value] = useState("") 해당하는 값
 * @param {(value : string) => void} setValue [_, setvalue] = useState("") 해당하는 값
 * @param {string[]} options <option>에 해당하는 값들의 배열
 * @param {ReactElement} Icon Icon svg 컴포넌트
 * @param {string} width 선택 박스의 너비
 * @returns {ReactElement}
 */
export const Select = <T extends readonly string[]>({
    currentValue,
    options,
    setValue,
    Icon,
    width,
    height,
}: ISelect<T>) => {
    const id = useId()
    const [isSelect, setIsSelect] = useState(false)
    const ref = useRef(null)
    useClickOutside(ref, () => {
        setIsSelect(false)
    })
    const handleListClick = (value: string) => {
        if (value !== currentValue) {
            setValue(value)
            setIsSelect(false)
        }
    }

    return (
        <Box className={S.container} style={{ width: width, height: height }}>
            <Box
                ref={ref}
                className={S.wrapper}
                style={{ width: width, minHeight: height }}
            >
                <Box
                    as={'label'}
                    htmlFor={`${id}:select`}
                    onClick={() => setIsSelect(true)}
                    display="flex"
                    alignItems="center"
                    style={{ gap: '4px' }}
                    className={S.cell}
                >
                    {Icon}
                    <Text>
                        {currentValue === '' ? options[0] : currentValue}
                    </Text>
                    {isSelect ? (
                        <Up width={15} height={15} />
                    ) : (
                        <Down width={15} height={15} />
                    )}
                </Box>
                {isSelect && (
                    <Box as={'ul'} style={{ width: '100%' }}>
                        {options.map((option, index) => {
                            return (
                                <Box
                                    as={'li'}
                                    key={`${id}:select:${index}`}
                                    onClick={() => handleListClick(option)}
                                    className={`${S.cell} ${option === currentValue ? S.option.default : S.option.action} `}
                                    style={
                                        index === options.length - 1
                                            ? {
                                                  borderRadius:
                                                      '0px 0px 6px 6px',
                                              }
                                            : {}
                                    }
                                >
                                    <Text
                                        color={
                                            option !== currentValue
                                                ? 'neutral-80'
                                                : 'neutral-30'
                                        }
                                    >
                                        {option}
                                    </Text>
                                </Box>
                            )
                        })}
                    </Box>
                )}
            </Box>
        </Box>
    )
}
