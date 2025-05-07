import { useAuthStore } from '@/entities/user/stores/AuthStore'
import { LoginedUserNav } from '@/features/nav/login'
import { UnLoginedUserNav } from '@/features/nav/unlogin'

export const UserNav = () => {
    const isLoggined = useAuthStore.getState().isLoggedIn
    return isLoggined ? <LoginedUserNav /> : <UnLoginedUserNav />
}
