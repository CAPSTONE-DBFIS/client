import {
    ReactElement,
    Children,
    isValidElement,
    useCallback,
    useMemo,
} from 'react'
import { useSearchParams } from 'react-router-dom'
import { IFunnel, IStep } from '@/features/signup/type/funnel.type'

export const Funnel = <T extends readonly string[]>({
    steps,
    step,
    children,
}: IFunnel<T>) => {
    const validChildren = Children.toArray(children)
        .filter(isValidElement)
        .filter((i) =>
            steps.includes((i.props as Partial<IStep<T>>).name ?? '')
        ) as Array<ReactElement<IStep<T>>>
    const targetStep = validChildren.find((child) => child.props.name === step)
    return <>{targetStep || null}</>
}

export const Step = <T extends readonly string[]>({
    children,
}: IStep<T>): ReactElement => {
    return <>{children}</>
}

/**
 * Funnel을 사용하기 위한 useFunnel 훅
 * @param {string[]} steps 필요한 모든 스텝 배열 - required
 * @param {string[number]} defaulStep 기본으로 열리게 될 step, steps[number] 형태 - required
 * @param {string} [paramKey='step'] searchParams key 값 - optional
 * @returns
 */ // eslint-disable-next-line react-refresh/only-export-components
export const useFunnel = <T extends readonly string[]>(
    steps: T,
    defaulStep: T[number],
    paramKey: string = 'step'
) => {
    const [params, setParams] = useSearchParams()
    const setStep = useCallback(
        (step: T[number]) =>
            setParams((prev) => {
                const newParams = new URLSearchParams(prev)
                newParams.set(paramKey, step)

                return newParams
            }),
        [setParams, paramKey]
    )

    const FunnelComponent = useMemo(() => {
        return Object.assign(
            (props: Omit<IFunnel<T>, 'steps' | 'step'>) => {
                const step = params.get(paramKey) ?? defaulStep
                return <Funnel<T> steps={steps} step={step} {...props} />
            },
            { steps }
        )
    }, [params, defaulStep, steps, paramKey])

    return [FunnelComponent, setStep] as const
}
