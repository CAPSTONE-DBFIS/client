import { Box } from '@/shared/ui/Box'
import * as style from './styles/tracking-sidebar.css'
import Plus from '@/shared/asset/icon/plus-sm.svg?react'
import { Text } from '@/shared/ui/Text'
import { useState } from 'react'
import { colors } from '@/app/token'
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

    const projectTaskClick = (taskId: number) => {
        setSelectedTask(taskId)
    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={style.layout}
        >
            {teams.map((team) => (
                <Box key={team.id}>
                    {/* 팀 이름 */}
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        style={{ padding: '0 8px 12px 8px' }}
                    >
                        <Text color="neutral-900" fontSize="subHeadline">
                            {team.name}
                        </Text>
                        <Plus
                            width={15}
                            height={15}
                            fill={colors['neutral-100']}
                        />
                    </Box>
                    {/* 팀의 프로젝트 리스트 */}
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '6px' }}
                    >
                        {team.projects.map((project) => (
                            <Box
                                display="flex"
                                fontSize="body"
                                key={project.id}
                                className={`
                                ${style.taskItem} 
                                ${style.menuItemClick[selectedTask === project.id ? 'selected' : 'default']}
                            `}
                                onClick={() => projectTaskClick(project.id)}
                            >
                                <Text
                                    fontSize="body"
                                    className={`${style.taskIcon} ${selectedTask === project.id ? style.selectedTaskIcon : ''}`}
                                >
                                    {project.name.charAt(0)}
                                </Text>
                                <Text>{project.name}</Text>
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
