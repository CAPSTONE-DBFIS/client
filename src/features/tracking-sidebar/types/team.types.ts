export interface IProject {
    id: number
    name: string
}

export interface Team {
    id: number
    name: string
    projects: IProject[]
}

export interface ITeamSection {
    team: Team
    addProject: boolean
    inProject: string
    onAddProject: (teamId: number) => void
    onInputChange: (teamId: number, value: string) => void
    onToggleInput: (teamId: number) => void
    selectedTask: number | null
    onProjectClick: (taskId: number) => void
}
