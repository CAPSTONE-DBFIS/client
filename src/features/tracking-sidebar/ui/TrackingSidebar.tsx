import { useState } from 'react'
//css
import * as style from './styles/tracking-sidebar.css'
//components
import { Box } from '@/shared/ui/Box'
import { TeamSection } from './TeamSection'
import { postProject } from '@/entities/tracking/api/tracking'
import {
    ITrackingProject,
    ITrackingSidebarProps,
    ITrackingTeam,
} from '@/entities/tracking/type/tracking.type'

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

export const TrackingSidebar: React.FC<ITrackingSidebarProps> = ({
    teamsData,
    setTeamsData,
    onTeamSelect,
    onProjectSelect,
}) => {
    // const [selectedTask, setSelectedTask] = useState<number | null>(null)
    const [addProject, setAddProject] = useState<{ [key: number]: boolean }>({})
    const [inProject, setInProject] = useState<{ [key: number]: string }>({})
    const [selectedProject, setSelectedProject] = useState<number | null>(null) //프로젝트 선택택

    const handleInput = (teamId: number) => {
        setAddProject((prev) => ({ ...prev, [teamId]: !prev[teamId] }))
    }

    const handleAddProject = async (teamId: number, name: string) => {
        try {
            const response = await postProject({
                teamId,
                name,
            })
            const newProject: ITrackingProject = response.data

            setTeamsData((prevTeams) =>
                prevTeams.map((team) =>
                    team.id === teamId
                        ? {
                              ...team,
                              projects: [...team.projects, newProject],
                          }
                        : team
                )
            )

            setInProject((prev) => ({ ...prev, [teamId]: '' }))
            setAddProject((prev) => ({ ...prev, [teamId]: false }))
        } catch (error) {
            console.error('프로젝트 추가 중 오류 발생:', error)
        }
    }

    const handleInputChange = (teamId: number, value: string) => {
        setInProject((prev) => ({ ...prev, [teamId]: value }))
    }

    const handleProjectClick = (
        team: ITrackingTeam,
        project: ITrackingProject
    ) => {
        setSelectedProject(project.id)
        onTeamSelect(team)
        onProjectSelect(project)
    }

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
                    onAddProject={handleAddProject}
                    onInputChange={handleInputChange}
                    onToggleInput={handleInput}
                    selectedProject={selectedProject}
                    onProjectClick={(projectId) =>
                        handleProjectClick(
                            team,
                            team.projects.find((p) => p.id === projectId)!
                        )
                    }
                />
            ))}
        </Box>
    )
}
