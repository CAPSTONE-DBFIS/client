//components
import { Box } from '@/shared/ui/Box'
import { Title } from './Title'
import { Taps } from './Taps'
import { Dashboard } from '../dashboard/index'

//css
import * as style from './styles/trackingmain.css'

/**
 * 메인 콘텐츠 영역(Title, Tap, Dashboard)
 *
 * @returns {JSX.Element}
 */
export const TrackingMain = () => {
    return (
        <Box className={style.layout}>
            <Title></Title>
            <Taps></Taps>
            <Dashboard></Dashboard>
        </Box>
    )
}
