import { forwardRef, useId, useState } from 'react'
import { Box } from '../Box'
import { textInput, textLabel } from './input.css'

interface ITextInput {
    size?: 'large' | 'medium' | 'small'
    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date'
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
    onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement>) => void
    onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement>) => void
    onkeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const TextInput = forwardRef<HTMLInputElement, ITextInput>(
    (
        {
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
            onCompositionEnd,
            onCompositionStart,
            onkeyDown
        },
        ref
    ) => {
        const inputId = useId()
        const [isFocus, setIsFocus] = useState(false)

        return (
            <Box
                as="label"
                htmlFor={inputId}
                className={textLabel({ size })}
                style={isFocus ? { borderColor: '#2BA0B5', width } : { width }}
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
                    onCompositionEnd={onCompositionEnd}
                    onCompositionStart={onCompositionStart}
                    onKeyDown={onkeyDown}
                    ref={ref}
                />
                {rightIcon}
            </Box>
        )
    }
)

TextInput.displayName = 'TextInput' // ⚠️ forwardRef 사용 시 필수적으로 설정