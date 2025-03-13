import { fontSizes } from '@/app/token'
import { Box } from '../Box'
import { button } from './button.css'

interface IButton {
    children?: React.ReactNode
    onClickFunc?: () => void
    size: 'small' | 'medium' | 'large'
    type: 'primary' | 'secondary' | 'tertiary'
    fontSize?: keyof typeof fontSizes
}

/**
 * 공통 버튼 컴포넌트
 * @param {React.ReactNode} children children(optional)
 * @param {() => void} onClickFunc click 함수(optional)
 * @param {fontSizes} fontSize 내부 폰트 크기
 * @param {string} size 버튼 크기 - small | medium | large(required)
 * @param {string} type 버튼 유형 - primary | secondary | tertiary(required)
 * @returns {JsxElement}
 */

export const Button: React.FC<IButton> = ({
    children,
    onClickFunc,
    fontSize = 'body',
    size,
    type,
}) => {
    return (
        <Box
            as={'button'}
            onClick={onClickFunc}
            fontSize={fontSize}
            className={button({
                color: type,
                size: size,
            })}
        >
            {children}
        </Box>
    )
}
