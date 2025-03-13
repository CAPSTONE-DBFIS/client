// component
import { Box } from '@/shared/ui/Box'
// css
import { logoBox } from './nav.css'
// svg
import LogoImg from '@/shared/asset/image/logo.svg?react'
// react-router-dom
import { Link } from 'react-router-dom'

export const Logo: React.FC = () => {
    return (
        <Box className={logoBox}>
            <Link to={'/'}>
                <LogoImg />
            </Link>
        </Box>
    )
}
