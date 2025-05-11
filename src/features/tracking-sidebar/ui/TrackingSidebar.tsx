import { useState } from 'react'
//css
import * as style from './styles/tracking-sidebar.css'
//components
import { Box } from '@/shared/ui/Box'
import { TeamSection } from './TeamSection'
//constant
import { teams } from '@/pages/tracking/const/teams'
import { IProject, ITeam, TrackingSidebarProps } from '../types/team.types'

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

export const TrackingSidebar: React.FC<TrackingSidebarProps> = ({
    onTeamSelect,
    onProjectSelect,
}) => {
    const [selectedTask, setSelectedTask] = useState<number | null>(null)
    const [addProject, setAddProject] = useState<{ [key: number]: boolean }>({})
    const [inProject, setInProject] = useState<{ [key: number]: string }>({})
    const [teamData, setTeamData] = useState(teams)

    const handleInput = (teamId: number) => {
        setAddProject((prev) => ({ ...prev, [teamId]: !prev[teamId] }))
    }

    const handleAddProject = (teamId: number) => {
        const name = inProject[teamId]
        if (!name) return

        setTeamData((prev) =>
            prev.map((team) => {
                if (team.id !== teamId) return team

                const nextId = team.projects.length
                    ? Math.max(...team.projects.map((p) => p.id)) + 1
                    : 1

                const newProject = { id: nextId, name }

                return {
                    ...team,
                    projects: [...team.projects, newProject],
                }
            })
        )

        setInProject((prev) => ({ ...prev, [teamId]: '' }))
        setAddProject((prev) => ({ ...prev, [teamId]: false }))
    }

    const handleInputChange = (teamId: number, value: string) => {
        setInProject((prev) => ({ ...prev, [teamId]: value }))
    }

    const handleProjectClick = (team: ITeam, project: IProject) => {
        setSelectedTask(project.id)
        onTeamSelect(team) // 선택된 팀 전달
        onProjectSelect(project) // 선택된 프로젝트 전달
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={style.layout}
        >
            {teamData.map((team) => (
                <TeamSection
                    key={team.id}
                    team={team}
                    addProject={addProject[team.id] || false}
                    inProject={inProject[team.id] || ''}
                    onAddProject={handleAddProject}
                    onInputChange={handleInputChange}
                    onToggleInput={handleInput}
                    selectedTask={selectedTask}
                    onProjectClick={(projectId) => {
                        const project = team.projects.find(
                            (p) => p.id === projectId
                        )
                        if (project) {
                            handleProjectClick(team, project)
                        }
                    }}
                />
            ))}
        </Box>
    )
}
