import { AllHTMLAttributes, ElementType } from 'react'
import { Sprinkles } from '@/app/sprinkle/sprinkle.css'

export interface IBox
    extends Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'color'>,
        Sprinkles {
    children?: React.ReactNode // 하위 React 노드
    className?: string // 클래스 이름
    as?: ElementType // HTML 엘리먼트 타입 (기본값: div)
}

export type BoxProps = Readonly<IBox>
