import { useRef } from 'react'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { TextInput } from '@/shared/ui/Input/TextInput'
import Plus from '@/shared/asset/icon/plus-sm.svg?react'
import Trash from '@/shared/asset/icon/trash.svg?react'
import Edit from '@/shared/asset/icon/pencil-alt.svg?react'
import * as style from './styles/team-secion.css'
import { colors } from '@/app/token'
import { ITeamSection, IProject } from '../types/team.types'

export const TeamSection: React.FC<ITeamSection> = ({
    team,
    addProject,
    inProject,
    onAddProject,
    onInputChange,
    onToggleInput,
    selectedTask,
    onProjectClick,
}) => {
    const inputRef = useRef<HTMLDivElement>(null)

    useClickOutside(inputRef, () => onToggleInput(team.id))

    return (
        <Box>
            {/* 팀 이름 */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                style={{ padding: '0 8px 12px 8px' }}
            >
                <Text color="neutral-900" fontSize="subHeadline">
                    {team.name}
                </Text>
                {addProject || (
                    <Box onClick={() => onToggleInput(team.id)}>
                        <Plus
                            width={15}
                            height={15}
                            fill={colors['neutral-100']}
                        />
                    </Box>
                )}
            </Box>

            {/* 입력창 */}
            {addProject && (
                <Box
                    ref={inputRef}
                    display="flex"
                    justifyContent="center"
                    style={{ marginBottom: '12px' }}
                >
                    <TextInput
                        placeholder="프로젝트 이름을 입력해주세요."
                        size="small"
                        width="200px"
                        value={inProject}
                        onChange={(e) => onInputChange(team.id, e.target.value)}
                        rightIcon={
                            <Plus
                                fill={colors['neutral-90']}
                                onClick={() => onAddProject(team.id)}
                            />
                        }
                    />
                </Box>
            )}

            {/* 프로젝트 리스트 */}
            <Box display="flex" flexDirection="column" style={{ gap: '6px' }}>
                {team.projects.map((project: IProject) => (
                    <Box
                        key={project.id}
                        display="flex"
                        justifyContent="space-between"
                        fontSize="body"
                        className={`${style.taskItem}
                        ${style.menuItemClick[selectedTask === project.id ? 'selected' : 'default']}
                                        `}
                        onClick={() => onProjectClick(project.id)}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            style={{ gap: '16px' }}
                        >
                            <Text
                                align="left"
                                fontSize="body"
                                className={`${style.taskIcon} ${
                                    selectedTask === project.id &&
                                    style.selectedTaskIcon
                                }`}
                            >
                                {project.name.charAt(0)}
                            </Text>
                            <Text>{project.name}</Text>
                        </Box>

                        {selectedTask === project.id && (
                            <Box className={style.selectedEdit}>
                                <Box className={style.slidingContent}>
                                    <Trash width={16} height={16} />
                                    <Edit width={16} height={16} />
                                </Box>
                            </Box>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
