import { UnLoginedUserNav } from './unlogin/UnLoginedUserNav'
import { LoginedUserNav } from './login'

export const UserNav = () => {
    const isAuth = true
    return isAuth ? <LoginedUserNav/> : <UnLoginedUserNav />
}
