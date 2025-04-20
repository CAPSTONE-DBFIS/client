//components
import { Box } from '@/shared/ui/Box'
import { Title } from './Title'
import { Taps } from './Taps'
import { Dashboard } from './dashboard/index'

//css
import * as style from './styles/trackingmain.css'

//interface
import { IProject } from '../types/project.type'
import { useState } from 'react'

/**
 * 메인 콘텐츠 영역(Title, Tap, Dashboard)
 * @param {string} projectName - 프로젝트 제목
 * @param {string} projectPath - 프로젝트 경로(개인/프로젝트)
 * @returns {JSX.Element}
 */
export const TrackingMain = ({ projectName }: IProject) => {
    const [selectedTaps, setSelectedTaps] = useState('calendar') //현재 선택된 탭(캘린더/리스트)을 관리

    return (
        <Box className={style.layout}>
            <Title projectName={projectName} />
            <Taps selectedTaps={selectedTaps} onTapsChange={setSelectedTaps} />
            <Dashboard activeView={selectedTaps} />
        </Box>
    )
}
