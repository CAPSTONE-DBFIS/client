import { LoginedUserNav } from '@/features/nav/login'
import { UnLoginedUserNav } from '@/features/nav/unlogin'

export const UserNav = () => {
    const isAuth = true
    return isAuth ? <LoginedUserNav /> : <UnLoginedUserNav />
}
