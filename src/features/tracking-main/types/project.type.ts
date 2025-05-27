export interface IProject {
    projectName: string //프로젝트 제목
    projectPath: string //프로젝트 경로
    onReportSelect: (id: number) => void
}
