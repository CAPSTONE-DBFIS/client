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
 */
export interface ITrackingProjectRequest {
    teamId: number
    name: string
    description: string
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

export interface ITeamSection {
    team: ITrackingTeam
    addProject: boolean
    inProject: string
    selectedProject: number | null
    onAddProject: (teamId: number, projectName: string) => void
    onInputChange: (teamId: number, value: string) => void
    onToggleInput: (teamId: number) => void
    onProjectClick: (projectId: number) => void
    onEditProject: (projectId: number, name: string, teamId: number) => void
    onDeleteProject: (projectId: number) => void
}

export interface ITrackingKeyword {
    id: number
    keyword: string
    startDate: string
    endDate: string
    trackingInterval: number
    projectId: number
}

export interface ITrackingList {
    id: number
    keyword: string
    createdAt: string
    createdOrder: number
    articleCountReport: string
}
export type ListWithDate = ITrackingList & {
    startDate: string
    endDate: string
    trackingInterval?: number
}

export interface ITrackingReport {
    id: number
    keyword: string
    createdAt: string //보고서생성일일
    createdOrder: number //n번째 보고서서
    sentimentReport: string //긍부정정
    articleCountReport: string //일주일동안의기사수수
    mediaCompaniesReport: string //언론사갯수
    relatedWordReport: string[] //연관어
    recordDate: string //날짜
    articleCntChange: string //키워드증감요약
    llmDescription: string //키워드분석의 llm
}
