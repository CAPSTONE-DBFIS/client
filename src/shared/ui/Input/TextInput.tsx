import { useId, useState } from 'react'
import { Box } from '../Box'
import { textInput, textLabel } from './input.css'

interface ITextInput {
    size?: 'large' | 'medium' | 'small'
    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'
    placeholder?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    disabled?: boolean
    required?: boolean
    width?: string
    height?: string
}
/**
 * shared Input string type(text, password, email ...) 컴포넌트
 * @param {string} size - input 크기(large, medium, small) default: medium(optional)
 * @param {string} type - input 타입(text, password, email, number, search, tel, url) default: text(optional)
 * @param {string} placeholder - input placeholder(default: placeholder)(optional)
 * @param {React.ReactNode} leftIcon - input 왼쪽 아이콘(optional)
 * @param {React.ReactNode} rightIcon - input 오른쪽 아이콘(optional)
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - input 변경 이벤트(optional)
 * @param {string} value - input value(optional)
 * @param {boolean} disabled - input 비활성화 여부(default: false)(optional)
 * @param {boolean} required - input 필수 여부(default: false)(optional)
 * @param {string} width - input 너비(optional)
 * @param {string} height - input 높이(optional)
 * @returns {JsxElement}
 */

export const TextInput: React.FC<ITextInput> = ({
    size = 'medium',
    type = 'text',
    placeholder = 'placeholder',
    leftIcon,
    rightIcon,
    onChange,
    value,
    disabled = false,
    required = false,
    width,
    height,
}) => {
    const inputId = useId()
    const [isFocus, setIsFocus] = useState(false)

    return (
        <Box
            as={'label'}
            htmlFor={inputId}
            className={textLabel({ size })}
            style={isFocus ? { borderColor: '#2BA0B5' } : {}}
        >
            {leftIcon}
            <Box
                as="input"
                type={type}
                id={inputId}
                placeholder={placeholder}
                className={textInput({ size })}
                onChange={onChange}
                value={value}
                disabled={disabled}
                required={required}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                style={{ width, height }}
            />
            {rightIcon}
        </Box>
    )
}
