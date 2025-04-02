import { LoginedUserNav } from '@/features/nav/login'
import { UnLoginedUserNav } from '@/features/nav/unlogin'

export const UserNav = () => {
    const isAuth = false
    return isAuth ? <LoginedUserNav /> : <UnLoginedUserNav />
}
