//components
import { Box } from '@/shared/ui/Box'
import { Title } from './Title'
import { Taps } from './Taps'
import { Dashboard } from '../dashboard/index'

//css
import * as style from './styles/trackingmain.css'

//interface
import { IProject } from '../model/project.type'
/**
 * 메인 콘텐츠 영역(Title, Tap, Dashboard)
 *
 * @returns {JSX.Element}
 */
export const TrackingMain = ({ projectName, projectPath }: IProject) => {
    return (
        <Box className={style.layout}>
            <Title projectName={projectName} projectPath={projectPath}></Title>
            <Taps></Taps>
            <Dashboard></Dashboard>
        </Box>
    )
}
