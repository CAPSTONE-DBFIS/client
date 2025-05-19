//css
import * as style from './styles/tracking-sidebar.css'
//components
import { Box } from '@/shared/ui/Box'
import { TeamSection } from './TeamSection'
import { ITrackingSidebar } from '@/entities/tracking/type/tracking.type'

/**
 * TrackingSidebar
 * 팀과 프로젝트를 관리하는 사이드바 UI
 * @function handleInput - 입력창을 열기 or 닫기기
 * @param {number} teamId - 팀의 id
 *
 * @function handleAddProject - 새 프로젝트를 추가
 * @param {number} teamId - 팀의 id
 *
 * @function handleInputChange - 입력창에 입력된 값을 상태업데이트
 * @param {number} teamId - 팀의 id
 * @param {string} value - 입력된 값
 *
 * @function handleProjectClick - 특정 프로젝트를 선택
 * @param {number} taskId -팀의 id
 *
 * @returns {JSX.Element}
 */

export const TrackingSidebar: React.FC<ITrackingSidebar> = ({
    teamsData,
    addProject,
    inProject,
    onAddProject,
    onInputChange,
    onToggleInput,
    selectedProject,
    onProjectClick,
}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={style.layout}
        >
            {teamsData.map((team) => (
                <TeamSection
                    key={team.id}
                    team={team}
                    addProject={addProject[team.id] || false}
                    inProject={inProject[team.id] || ''}
                    onAddProject={onAddProject}
                    onInputChange={onInputChange}
                    onToggleInput={onToggleInput}
                    selectedProject={selectedProject}
                    onProjectClick={(projectId) =>
                        onProjectClick(projectId, team.id)
                    }
                />
            ))}
        </Box>
    )
}
