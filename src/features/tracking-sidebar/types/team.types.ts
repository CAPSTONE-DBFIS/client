/**
 * 프로젝트 데이터 인터페이스
 * @interface IProject
 * @property {number} id - 프로젝트 id
 * @property {string} name - 프로젝트 이름
 */
export interface IProject {
    id: number
    name: string
}

/**
 * 팀 데이터 인터페이스
 * @interface ITeam
 * @property {number} id - 팀 id
 * @property {string} name - 팀 이름
 * @property {IProject[]} projects - 팀의 프로젝트 목록
 */
export interface ITeam {
    id: number
    name: string
    projects: IProject[]
}

/**
 * TeamSection 컴포넌트의 props 인터페이스
 * @interface ITeamSection
 * @property {ITeam} team - 팀 데이터
 * @property {boolean} addProject - 프로젝트 추가 입력창 표시 여부
 * @property {string} inProject - 입력 중인 프로젝트 이름
 * @property {function} onAddProject - 프로젝트 추가 핸들러
 * @property {function} onInputChange - 입력값 변경 핸들러
 * @property {function} onToggleInput - 입력창 토글 핸들러
 * @property {number | null} selectedTask - 선택된 프로젝트 ID
 * @property {function} onProjectClick - 프로젝트 클릭 핸들러
 */
export interface ITeamSection {
    team: ITeam
    addProject: boolean
    inProject: string
    onAddProject: (teamId: number) => void
    onInputChange: (teamId: number, value: string) => void
    onToggleInput: (teamId: number) => void
    selectedTask: number | null
    onProjectClick: (taskId: number) => void
}
