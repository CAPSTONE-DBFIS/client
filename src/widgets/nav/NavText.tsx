import { Text } from '@/shared/ui/Text'
import { NavLink, useLocation } from 'react-router-dom'
import { listText } from './nav.css'

interface INavText {
    to: string
    children: React.ReactNode
}

export const NavText: React.FC<INavText> = ({ to, children }) => {
    const locate = useLocation()
    return (
        <NavLink to={to}>
            <Text
                fontSize="title2"
                className={
                    locate.pathname.startsWith(to)
                        ? listText.selected
                        : listText.default
                }
            >
                {children}
            </Text>
        </NavLink>
    )
}
