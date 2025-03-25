import { Box } from '@/shared/ui/Box'
import * as style from '@/features/tracking-main/trackingmain.css'
import { Title } from './Title'
import { Tap } from './Tap'
import { Dashboard } from './dashboard/index'
export const TrackingMain = () => {
    return (
        <Box className={style.layout}>
            <Title></Title>
            <Tap></Tap>
            <Dashboard></Dashboard>
        </Box>
    )
}
