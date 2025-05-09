import { useState } from 'react'

//components
import { Box } from '@/shared/ui/Box'
import { Title } from './Title'
import { Taps } from './Taps'
import { Dashboard } from './dashboard/index'
import { Report } from './Report'

//css
import * as style from './styles/trackingmain.css'

//interface
import { IProject } from '../types/project.type'

/**
 * 메인 콘텐츠 영역(Title, Tap, Dashboard)
 * @param {string} projectName - 프로젝트 제목
 * @param {string} projectPath - 프로젝트 경로
 * @returns {JSX.Element}
 */
export const TrackingMain = ({ projectName, projectPath }: IProject) => {
    const [selectedTaps, setSelectedTaps] = useState('calendar') //현재 선택된 탭(캘린더/리스트)을 관리
    const [selectedReport, setSelectedReport] = useState<string | null>(null) // 선택된 리스트 데이터
    console.log(selectedReport)
    return (
        <Box className={style.layout}>
            <Title projectName={projectName} projectPath={projectPath} />

            {/* Report 컴포넌트 */}
            {selectedReport ? (
                <Report id={selectedReport} />
            ) : (
                <Box>
                    <Taps
                        selectedTaps={selectedTaps}
                        onTapsChange={setSelectedTaps}
                    />
                    <Dashboard
                        activeView={selectedTaps}
                        onReportSelect={setSelectedReport}
                    />
                </Box>
            )}
        </Box>
    )
}
