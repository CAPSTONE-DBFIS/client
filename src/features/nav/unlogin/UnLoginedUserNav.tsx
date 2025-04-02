import { Box } from '@/shared/ui/Box'
import { btnBox } from './unloginedusernav.css'
import { Button } from '@/shared/ui/Button/Button'
import { Link } from 'react-router-dom'

export const UnLoginedUserNav: React.FC = () => {
    return (
        <Box display="flex" className={btnBox} alignItems="center">
            <Link to={'/auth'}>
                <Button size="small" type="primary" fontSize="body">
                    로그인
                </Button>
            </Link>
            <Link to={'/auth'}>
                <Button size="small" type="tertiary">
                    회원가입
                </Button>
            </Link>
        </Box>
    )
}
