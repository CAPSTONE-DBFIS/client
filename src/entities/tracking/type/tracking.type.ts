/**
 * 팀 데이터 인터페이스
 * @interface ITrackingTeam
 * @property {string} id - 팀 ID
 * @property {string} name - 팀 이름
 * @property {ITrackingProject[]} projects - 팀의 프로젝트 목록
 */
export interface ITrackingTeam {
    id: number
    name: string
    projects: ITrackingProject[]
}

/**
 * 프로젝트 데이터 인터페이스
 * @interface ITrackingProject
 * @property {string} id - 프로젝트 ID
 * @property {string} name - 프로젝트 이름
 * @property {string} description - 프로젝트 설명
 * @property {string} startDate - 프로젝트 시작일
 * @property {string} endDate - 프로젝트 종료일
 */
export interface ITrackingProject {
    id: number
    name: string
    teamId: number
}

/**
 * 팀 API 응답 데이터 인터페이스
 * @interface ITrackingTeamResponse
 * @property {string} teamId - 팀 ID
 * @property {string} teamName - 팀 이름
 */
export interface ITrackingTeamResponse {
    teamId: number
    teamName: string
}

/**
 * 프로젝트 API 요청 데이터 인터페이스
 * @interface ITrackingProjectRequest
 * @property {string} teamId - 팀 ID
 * @property {string} name - 프로젝트 이름
 * @property {string} description - 프로젝트 설명
 * @property {string} startDate - 프로젝트 시작일
 * @property {string} endDate - 프로젝트 종료일
 */
export interface ITrackingProjectRequest {
    teamId: number
    name: string
    description: string
    startDate: string
    endDate: string
}

/**
 * TrackingSidebar 컴포넌트의 props 인터페이스
 * @interface ITrackingSidebarProps
 * @property {function} onTeamSelect - 팀 선택 핸들러
 * @property {function} onProjectSelect - 프로젝트 선택 핸들러
 * @property {ITrackingTeam[]} teamsData - 팀 데이터 목록
 * @property {function} setTeamsData - 팀 데이터 상태 업데이트 핸들러
 */
export interface ITrackingSidebar {
    teamsData: ITrackingTeam[]
    addProject: { [teamId: number]: boolean }
    inProject: { [teamId: number]: string }
    onAddProject: (teamId: number, projectName: string) => void
    onInputChange: (teamId: number, value: string) => void
    onToggleInput: (teamId: number) => void
    selectedProject: number | null
    onProjectClick: (projectId: number, teamId: number) => void
    onEditProject: (projectId: number, name: string, teamId: number) => void
    onDeleteProject: (projectId: number) => void
}
