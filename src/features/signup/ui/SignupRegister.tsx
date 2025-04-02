// funnel
import { Step, useFunnel } from '@/features/signup/lib/useFunnel'
// forms
import { DepartmentForm } from '@/features/signup/ui/form/DepartmentForm'
import { PhonePasswordForm } from '@/features/signup/ui/form/PhonePasswordForm'
import { PositionForm } from '@/features/signup/ui/form/PositionForm'

interface ISignupRegister {
    onSuccess: () => void
}
/**
 * 회원 가입 등록 컴포넌트 (Funnel 기반)
 * @param {() => void} onSuccess 회원가입 유저 정보 등록 성공 시 실행 함수
 * @returns
 */
export const SignupRegister = ({ onSuccess }: ISignupRegister) => {
    const [Funnel, setFunnel] = useFunnel(
        ['phone-and-pwd', 'department', 'position'] as const,
        'phone-and-pwd',
        'register'
    )

    return (
        <Funnel>
            <Step name="phone-and-pwd">
                <PhonePasswordForm onNext={() => setFunnel('department')} />
            </Step>
            <Step name="department">
                <DepartmentForm
                    onNext={() => setFunnel('position')}
                    onBack={() => setFunnel('phone-and-pwd')}
                />
            </Step>
            <Step name="position">
                <PositionForm
                    onNext={onSuccess}
                    onBack={() => setFunnel('department')}
                />
            </Step>
        </Funnel>
    )
}
