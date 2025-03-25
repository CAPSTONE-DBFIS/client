import { useNavThemeStore } from '@/app/stores'
import { Box } from '@/shared/ui/Box'
import { ToggleAuth } from '@/widgets/auth/ToggleAuth'
import { useEffect } from 'react'

/**
 * Navigation을 제거한 Auth Page
 * @returns {JsxElement}
 */
export const Auth = () => {
    const { hideNav, showNav } = useNavThemeStore(
        (state) => state.navController
    )
    useEffect(() => {
        hideNav()
        return () => {
            showNav()
        }
    }, [hideNav, showNav])

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <ToggleAuth />
        </Box>
    )
}
