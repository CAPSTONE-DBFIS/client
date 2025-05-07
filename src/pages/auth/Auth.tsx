import { useNavThemeStore } from '@/app/stores'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { ToggleAuth } from '@/widgets/auth/ToggleAuth'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

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
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
        >
            <Box
                display="flex"
                flexDirection="column"
                style={{ marginTop: '-160px', gap: '24px' }}
            >
                <Box display="flex" justifyContent="flex-end">
                    <Link to={'/'}>
                        <Text color="neutral-100">홈으로 가기</Text>
                    </Link>
                </Box>

                <ToggleAuth />
            </Box>
        </Box>
    )
}
