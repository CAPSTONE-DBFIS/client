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
