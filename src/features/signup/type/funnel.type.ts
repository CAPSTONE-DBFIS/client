import { ReactNode, ReactElement } from "react"

export interface IStepComponent {
    onBack?: () => void
    onNext?: () => void
    onEnter?: () => void
}

export interface IFunnel<T extends readonly string[]> {
    steps: T
    step: T[number]
    children: Array<ReactElement<IStep<T>>> | ReactElement<IStep<T>>
}

export interface IStep<T extends readonly string[]> {
    name: T[number]
    children?: ReactNode
}