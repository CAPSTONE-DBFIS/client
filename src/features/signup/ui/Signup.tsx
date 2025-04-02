// funnel
import { Step, useFunnel } from '@/features/signup/lib/useFunnel'
// signup steps
import { SignupAttempt } from '@/features/signup/ui/SignupAttempt'
import { SignupRegister } from '@/features/signup/ui/SignupRegister'
import { SignupSuccess } from '@/features/signup/ui/SignupSuccess'
import { SignupVerification } from '@/features/signup/ui/SignupVerification'

export const Signup = () => {
    const [Funnel, setFunnel] = useFunnel(
        ['attemp', 'verification', 'register', 'success'] as const,
        'attemp',
        'step'
    )
    return (
        <Funnel>
            <Step name="attemp">
                <SignupAttempt onNext={() => setFunnel('verification')} />
            </Step>
            <Step name="verification">
                <SignupVerification onNext={() => setFunnel('register')} />
            </Step>
            <Step name="register">
                <SignupRegister onSuccess={() => setFunnel('success')} />
            </Step>
            <Step name="success">
                <SignupSuccess />
            </Step>
        </Funnel>
    )
}
