// components
import { Box } from '@/shared/ui/Box'
import { NavText } from './NavText'
import { Logo } from './Logo'
// data
import { navList } from './token'
// style
import { navContainer, ulBox } from './nav.css'
// stores
import { useNavThemeStore } from '@/app/stores'

/**
 * Custom Navigate 컴포넌트
 * @returns {JsxElement}
 */
export const Nav: React.FC = () => {
    const navColor = useNavThemeStore((state) => state.navColor)
    return (
        <Box
            as={'nav'}
            display="flex"
            className={navContainer}
            style={{ backgroundColor: navColor }}
        >
            <Logo />
            <Box as={'ul'} display="flex" alignItems="center" className={ulBox}>
                {navList.map((item) => {
                    return (
                        <NavText to={item.url} key={item.key}>
                            {item.name}
                        </NavText>
                    )
                })}
            </Box>
        </Box>
    )
}
