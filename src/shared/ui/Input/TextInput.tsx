import { useId, useState } from 'react'
import { Box } from '../Box'
import { textInput, textLabel } from './input.css'

interface ITextInput {
    size?: 'large' | 'medium' | 'small'
    type?:
        | 'text'
        | 'password'
        | 'email'
        | 'number'
        | 'search'
        | 'tel'
        | 'url'
        | 'date'
    placeholder?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void
    value?: string
    disabled?: boolean
    required?: boolean
    width?: string
    height?: string
    name?: string
    maxLength?: number
    textAlignment?: 'left' | 'center' | 'right'
    readonly?: boolean
}
/**
 * shared Input string type(text, password, email ...) 컴포넌트
 * @param {string} size - input 크기(large, medium, small) default: medium(optional)
 * @param {string} type - input 타입(text, password, email, number, search, tel, url) default: text(optional)
 * @param {string} placeholder - input placeholder(default: placeholder)(optional)
 * @param {React.ReactNode} leftIcon - input 왼쪽 아이콘(optional)
 * @param {React.ReactNode} rightIcon - input 오른쪽 아이콘(optional)
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - input 변경 이벤트(optional)
 * @param {(e: React.FormEvent<HTMLInputElement>) => void} onInput - input 입력 이벤트(optional)
 * @param {string} value - input value(optional)
 * @param {boolean} disabled - input 비활성화 여부(default: false)(optional)
 * @param {boolean} required - input 필수 여부(default: false)(optional)
 * @param {string} width - input 너비(optional)
 * @param {string} height - input 높이(optional)
 * @param {string} name - name(optional)
 * @param {number} maxLength - 최대 글자 수(optional)
 * @param {string} textAlignment - 텍스트 정렬(default: left)(optional)
 * @param {boolean} readonly - input 읽기 전용 여부(default: false)(optional)
 * @returns {JsxElement}
 */

export const TextInput: React.FC<ITextInput> = ({
    size = 'medium',
    type = 'text',
    placeholder = 'placeholder',
    leftIcon,
    rightIcon,
    onChange,
    onInput,
    value,
    disabled = false,
    required = false,
    width,
    height,
    name,
    maxLength,
    textAlignment = 'left',
    readonly = false,
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
                name={name}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                style={{ width, height, textAlign: textAlignment }}
                maxLength={maxLength}
                onInput={onInput}
                readOnly={readonly}
            />
            {rightIcon}
        </Box>
    )
}
