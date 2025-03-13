import { Box } from '@/shared/ui/Box'
import { btnBox } from './unloginedusernav.css'
import { Button } from '@/shared/ui/Button/Button'

export const UnLoginedUserNav: React.FC = () => {
    return (
        <Box display="flex" className={btnBox} alignItems="center">
            <Button size="small" type="primary" fontSize="body">
                로그인
            </Button>
            <Button size="small" type="tertiary">
                회원가입
            </Button>
        </Box>
    )
}
