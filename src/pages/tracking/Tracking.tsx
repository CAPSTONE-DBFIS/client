import { Box } from '@/shared/ui/Box'
import { TrackingSidebar } from '@/features/tracking-sidebar/index'
import { Sidebar } from '@/widgets/Sidebar/index'
import { colors } from '@/app/token'
import { TrackingMain } from '@/features/tracking-main/index'
import { useEffect, useState } from 'react'
import { getTeams } from '@/entities/file/api/file'
import {
    ITrackingProject,
    ITrackingTeam,
    ITrackingTeamResponse,
} from '@/entities/tracking/type/tracking.type'
import {
    delProject,
    getProject,
    postProject,
    putProject,
} from '@/entities/tracking/api/tracking'
import { useTrackingStore } from '@/entities/tracking/store/trackingStore'
/**
 * 추적페이지
 * @type {{ name: string, path: string }}
 * @returns {JSX.Element}
 */
export const Tracking = () => {
    const selectedTeam = useTrackingStore((state) => state.selectedTeam)
    const setSelectedTeam = useTrackingStore((state) => state.setSelectedTeam)
    const selectedProject = useTrackingStore((state) => state.selectedProject)
    const setSelectedProject = useTrackingStore(
        (state) => state.setSelectedProject
    )

    const [teamsData, setTeamsData] = useState<ITrackingTeam[]>([])
    const [inProject, setInProject] = useState<{ [key: number]: string }>({})
    const [addProject, setAddProject] = useState<{ [key: number]: boolean }>({})

    // 팀과 프로젝트 불러오기
    const fetchTeamsAndProjects = async () => {
        try {
            const response = await getTeams()
            const mappedTeams = response.data.map(
                (team: ITrackingTeamResponse) => ({
                    id: team.teamId,
                    name: team.teamName,
                    projects: [],
                })
            )

            // 모든 프로젝트를 한 번에 조회
            const projectsResponse = await getProject()
            const allProjects = projectsResponse.data

            // 팀별로 프로젝트 분배
            const teamsWithProjects = mappedTeams.map(
                (team: ITrackingTeam) => ({
                    ...team,
                    projects: allProjects.filter(
                        (p: ITrackingProject) => p.teamId === team.id
                    ),
                })
            )

            setTeamsData(teamsWithProjects)
        } catch (error) {
            console.error(error)
            setTeamsData([])
        }
    }

    useEffect(() => {
        fetchTeamsAndProjects()
    }, [])

    // 입력창 토글
    const handleInput = (teamId: number) => {
        setAddProject((prev) => ({ ...prev, [teamId]: !prev[teamId] }))
    }

    // 입력값 변경
    const handleInputChange = (teamId: number, value: string) => {
        setInProject((prev) => ({ ...prev, [teamId]: value }))
    }

    // 프로젝트 추가
    const handleAddProject = async (teamId: number, name: string) => {
        try {
            await postProject({ teamId, name })
            //재조회
            fetchTeamsAndProjects()
            setInProject((prev) => ({ ...prev, [teamId]: '' }))
            setAddProject((prev) => ({ ...prev, [teamId]: false }))
        } catch (error) {
            console.error('프로젝트 추가 중 오류 발생:', error)
        }
    }

    // 프로젝트 클릭
    const handleProjectClick = (
        team: ITrackingTeam,
        project: ITrackingProject
    ) => {
        setSelectedTeam(team)
        setSelectedProject(project)
    }

    //수정
    const handleEditProject = async (projectId: number, name: string) => {
        try {
            await putProject(projectId, { name })
            fetchTeamsAndProjects()
        } catch (error) {
            console.error(error)
        }
    }
    //삭제
    const handleDeleteProject = async (projectId: number) => {
        try {
            await delProject(projectId)
            fetchTeamsAndProjects()
            setSelectedProject(null)
            setSelectedTeam(null)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="row"
            style={{ gap: '46px', backgroundColor: colors['neutral-10'] }}
        >
            {/* 사이드바 */}
            <Sidebar headerText="추적">
                <TrackingSidebar
                    teamsData={teamsData}
                    addProject={addProject}
                    inProject={inProject}
                    onAddProject={handleAddProject}
                    onInputChange={handleInputChange}
                    onToggleInput={handleInput}
                    selectedProject={selectedProject?.id ?? null}
                    onProjectClick={(projectId, teamId) => {
                        const team = teamsData.find((t) => t.id === teamId)!
                        const project = team.projects.find(
                            (p) => p.id === projectId
                        )!
                        handleProjectClick(team, project)
                    }}
                    onEditProject={handleEditProject}
                    onDeleteProject={handleDeleteProject}
                />
            </Sidebar>
            {/* 메인콘텐츠 */}
            <TrackingMain
                projectName={selectedTeam?.name || '팀'}
                projectPath={selectedProject?.name || '프로젝트'}
            />
        </Box>
    )
}
