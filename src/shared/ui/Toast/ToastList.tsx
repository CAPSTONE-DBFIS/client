import { useEffect, useRef, useState } from 'react'
import { Box } from '../Box'
import { toastContainerStyle, toastStackStyle, toastStyle } from './toast.css'
import { IToastList, toastProps } from '@/shared/types/toast.types'

/**
 * shared level, 토스트 리스트 컴포넌트
 * @param {IExtendedToastConfig} toastConfig 커스텀 훅을 사용한 토스트 설정 객체
 * @param {toastProps[]} toasts 커스텀 훅을 사용한 토스트 배열
 * @returns {JsxElement} 토스트 리스트 컴포넌트
 */
export const ToastList = ({ toastConfig, toasts }: IToastList) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [stack, setStack] = useState(true)
    useEffect(() => {
        if (containerRef.current && containerRef.current.children.length > 0) {
            const nodes =
                containerRef.current.querySelectorAll('[data-in="true"]')
            const gap = 12
            let usedHeight = 0
            let prevS = 0
            Array.from(nodes)
                .reverse()
                .forEach((n, i) => {
                    const node = n as HTMLElement

                    const y =
                        usedHeight * (stack ? 0.2 : 1) + (stack ? 0 : gap * i)
                    node.classList.add(toastStackStyle as string)

                    node.style.setProperty(
                        '--y',
                        `${toastConfig.toastPosition === 'UP' ? -y : y}px`
                    )
                    node.style.setProperty('--g', `${gap}`)
                    node.style.setProperty('--s', `${1 - (stack ? prevS : 0)}`)

                    usedHeight += node.offsetHeight
                    prevS += 0.025
                })
        }
    }, [toasts, stack, toastConfig])
    return (
        <Box
            ref={containerRef}
            className={toastContainerStyle}
            display="flex"
            flexDirection="column"
            onMouseEnter={() => setStack(false)}
            onMouseLeave={() => setStack(true)}
        >
            {toasts.map((props: toastProps, index) => {
                return (
                    <Box
                        key={props.id}
                        data-in="true"
                        className={toastStyle}
                        onClick={() => {
                            toastConfig.removeIndexToast(index)
                        }}
                    >
                        {index}
                        {props.message}
                    </Box>
                )
            })}
        </Box>
    )
}
