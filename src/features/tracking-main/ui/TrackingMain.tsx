import { useRef, useState } from 'react'

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
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'

/**
 * 메인 콘텐츠 영역(Title, Tap, Dashboard)
 * @param {string} projectName - 프로젝트 제목
 * @param {string} projectPath - 프로젝트 경로
 * @returns {JSX.Element}
 */
export const TrackingMain = ({ projectName, projectPath }: IProject) => {
    const [selectedTaps, setSelectedTaps] = useState('calendar') //현재 선택된 탭(캘린더/리스트)을 관리
    const [selectedReport, setSelectedReport] = useState<string | null>(null) // 선택된 리스트 데이터
    const reportRef = useRef<HTMLDivElement>(null)

    // 보고서 밖 클릭시 대시보드
    useClickOutside(reportRef, () => {
        setSelectedReport(null)
    })

    console.log(selectedReport)
    return (
        <Box className={style.layout}>
            <Title projectName={projectName} projectPath={projectPath} />

            {/* Report 컴포넌트 */}
            {selectedReport ? (
                <Box ref={reportRef}>
                    <Report id={selectedReport} />
                </Box>
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
