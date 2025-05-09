import { Box } from '@/shared/ui/Box'
import * as style from './styles/tracking-sidebar.css'
import { useState } from 'react'
import { TeamSection } from './TeamSection'

interface Project {
    id: number
    name: string
}

interface Team {
    id: number
    name: string
    projects: Project[]
}

const teams: Team[] = [
    {
        id: 1,
        name: '1팀',
        projects: [
            { id: 1, name: '00프로젝트' },
            { id: 2, name: '**프로젝트' },
            { id: 3, name: '$$프로젝트' },
        ],
    },
    {
        id: 2,
        name: '2팀',
        projects: [
            { id: 4, name: 'Alpha 프로젝트' },
            { id: 5, name: 'Beta 프로젝트' },
        ],
    },
    {
        id: 3,
        name: '3팀',
        projects: [
            { id: 6, name: 'Gamma 프로젝트' },
            { id: 7, name: 'Delta 프로젝트' },
        ],
    },
]

export const TrackingSidebar = () => {
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

    const handleProjectClick = (taskId: number) => {
        setSelectedTask(taskId)
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
                    onProjectClick={handleProjectClick}
                />
            ))}
        </Box>
    )
}
