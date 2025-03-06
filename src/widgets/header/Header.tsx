// components
import { Box } from '@/shared/ui/Box'
import { Nav } from '../nav'
// style
import { headerContainer, headerWrapper } from './header.css'

/**
 * Custom Header 컴포넌트
 * @returns {JsxElement}
 */
export const Header: React.FC = () => {
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
                <Nav />
                <div></div>
            </Box>
        </Box>
    )
}
