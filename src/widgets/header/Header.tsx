// components
import { Box } from '@/shared/ui/Box'
import { Nav } from '../nav'
// style
import { headerContainer, headerWrapper } from './header.css'
import { UserNav } from '../nav/user'
import { useNavThemeStore } from '@/app/stores'

/**
 * Custom Header 컴포넌트
 * @returns {JsxElement}
 */
export const Header: React.FC = () => {
    const isNav = useNavThemeStore((state) => state.isNav)
    return (
        <Box
            as="header"
            display="flex"
            className={headerContainer}
            justifyContent="center"
            alignItems="center"
        >
            <Box
                className={headerWrapper}
                display="flex"
                justifyContent="space-between"
            >
                {isNav && <Nav />}
                <UserNav />
            </Box>
        </Box>
    )
}
