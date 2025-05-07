// funnel
import { Step, useFunnel } from '@/features/signup/lib/useFunnel'
// signup steps
import { SignupAttempt } from '@/features/signup/ui/SignupAttempt'
import { SignupRegister } from '@/features/signup/ui/SignupRegister'
import { SignupSuccess } from '@/features/signup/ui/SignupSuccess'
import { SignupVerification } from '@/features/signup/ui/SignupVerification'
import { useState } from 'react'
import { IJoin } from '@/entities/user/join.type'
export const Signup = () => {
    const [Funnel, setFunnel] = useFunnel(
        ['attemp', 'verification', 'register', 'success'] as const,
        'attemp',
        'step'
    )
    const [formData, setFormData] = useState<IJoin>({
        id: '',
        name: '',
        nickname: '',
        email: '',
        phone: '',
        password: '',
        department: '',
        role: '',
    })
    return (
        <Funnel>
            <Step name="attemp">
                <SignupAttempt
                    onNext={() => setFunnel('register')}
                    formData={formData}
                    setFormData={setFormData}
                />
            </Step>
            <Step name="register">
                <SignupRegister
                    onSuccess={() => setFunnel('verification')}
                    formData={formData}
                    setFormData={setFormData}
                />
            </Step>
            <Step name="verification">
                <SignupVerification
                    onNext={() => setFunnel('success')}
                    id={formData.id}
                />
            </Step>
            <Step name="success">
                <SignupSuccess />
            </Step>
        </Funnel>
    )
}
