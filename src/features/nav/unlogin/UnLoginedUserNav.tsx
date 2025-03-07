import { Box } from '@/shared/ui/Box'
import { btnBox } from './unloginedusernav.css'

export const UnLoginedUserNav: React.FC = () => {
    return (
        <Box display="flex" className={btnBox}>
            <button>로그인</button>
            <button>회원가입</button>
        </Box>
    )
}
