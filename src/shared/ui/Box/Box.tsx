import { Sprinkles, sprinkles } from '@/app/sprinkle/sprinkle.css'
import { forwardRef } from 'react'
import { BoxProps } from './box.types'

/**
 * Box 컴포넌트는 shared UI 컴포넌트 중 가장 기본이 되는 컴포넌트입니다.
 * @param {string} [as = 'div'] HTML 엘리먼트 타입(optional)
 * @param {ReactNode} children 하위 React 노드(optional)
 * @param {string} className 클래스 이름(optional)
 * @param {any} props Sprinkles 속성 및 기타 속성
 * @returns {JsxElement} Box 컴포넌트
 * @example
 * <Box as={'div' | 'span' | ...} className="example"">
 *    <p>example</p>
 * </Box>
 */

export const Box = forwardRef<HTMLElement, BoxProps>(
    (
        {
            as: Element = 'div', // 기본값: div
            children,
            className,
            ...props
        },
        ref
    ) => {
        const atomProps: Record<string, unknown> = {} // Sprinkles 속성 포함 객체
        const nativeProps: Record<string, unknown> = {} // 그 외 객체

        for (const key in props) {
            if (sprinkles.properties.has(key as keyof Sprinkles))
                // sprinkles 포함 여부 판단
                atomProps[key] = props[key as keyof typeof props]
            else nativeProps[key] = props[key as keyof typeof props]
        }
        return (
            <Element
                ref={ref} // ref 속성
                className={`${className} ${sprinkles({ ...atomProps })}`} // Sprinkles 클래스 이름
                {...nativeProps} // 나머지 속성
            >
                {children}
            </Element>
        )
    }
)
