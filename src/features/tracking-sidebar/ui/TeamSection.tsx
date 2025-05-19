import { useRef, useState } from 'react'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
import { colors } from '@/app/token'
//icons
import Plus from '@/shared/asset/icon/plus-sm.svg?react'
import Trash from '@/shared/asset/icon/trash.svg?react'
import Edit from '@/shared/asset/icon/pencil-alt.svg?react'
//components
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import { TextInput } from '@/shared/ui/Input/TextInput'
import {
    ITrackingProject,
    ITrackingTeam,
} from '@/entities/tracking/type/tracking.type'
//css
import * as style from './styles/team-secion.css'

/**
 * TeamSection 컴포넌트
 * 팀의 프로젝트 목록과 입력창 관리
 *
 * @param {ITeamSection} props - TeamSection의 props
 * @param {ITeam} props.team - 팀 데이터
 * @param {boolean} props.addProject - 프로젝트 추가 입력창 표시 여부
 * @param {string} props.inProject - 입력 중인 프로젝트 이름
 * @param {function} props.onAddProject - 프로젝트 추가 핸들러
 * @param {function} props.onInputChange - 입력값 변경 핸들러
 * @param {function} props.onToggleInput - 입력창 토글 핸들러
 * @param {number | null} props.selectedTask - 선택된 프로젝트 ID
 * @param {function} props.onProjectClick - 프로젝트 클릭 핸들러
 * @returns {JSX.Element}
 */

export const TeamSection: React.FC<{
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
}> = ({
    team,
    addProject,
    inProject,
    onAddProject,
    onInputChange,
    onToggleInput,
    selectedProject,
    onProjectClick,
    onEditProject,
    onDeleteProject,
}) => {
    // 수정 프로젝트id와 값
    const [editProjectId, setEditProjectId] = useState<number | null>(null)
    const [editProjectName, setEditProjectName] = useState<string>('')

    const inputRef = useRef<HTMLDivElement>(null)

    useClickOutside(inputRef, () => onToggleInput(team.id))

    // 수정 시작
    const handleEditClick = (project: ITrackingProject) => {
        setEditProjectId(project.id)
        setEditProjectName(project.name)
    }

    // 수정 완료
    const handleEditSubmit = (projectId: number, teamId: number) => {
        onEditProject(projectId, editProjectName, teamId)
        setEditProjectId(null)
        setEditProjectName('')
    }

    return (
        <Box>
            {/* 팀 이름 */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                style={{ padding: '0 8px 12px 8px' }}
            >
                <Text color="neutral-900" fontSize="headline">
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
                    style={{ marginBottom: '12px', width: '100%' }}
                >
                    <TextInput
                        placeholder="프로젝트를 입력해주세요."
                        size="small"
                        width="230px"
                        value={inProject}
                        onChange={(e) => onInputChange(team.id, e.target.value)}
                        rightIcon={
                            <Plus
                                fill={colors['neutral-90']}
                                onClick={() => onAddProject(team.id, inProject)}
                            />
                        }
                    />
                </Box>
            )}

            {/* 프로젝트 리스트 */}
            <Box display="flex" flexDirection="column" style={{ gap: '6px' }}>
                {team.projects.map((project: ITrackingProject) => (
                    <Box
                        key={project.id}
                        display="flex"
                        justifyContent="space-between"
                        fontSize="body"
                        className={`${style.taskItem}
                        ${style.menuItemClick[selectedProject === project.id ? 'selected' : 'default']}
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
                                    selectedProject === project.id &&
                                    style.selectedTaskIcon
                                }`}
                            >
                                {project.name.charAt(0)}
                            </Text>
                            {editProjectId === project.id ? (
                                <input
                                    type="text"
                                    defaultValue={editProjectName}
                                    autoFocus
                                    onChange={(e) =>
                                        setEditProjectName(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            const newName =
                                                e.currentTarget.value
                                            if (
                                                newName &&
                                                newName !== project.name
                                            ) {
                                                handleEditSubmit(
                                                    project.id,
                                                    team.id
                                                )
                                            }
                                            setEditProjectId(null)
                                        }
                                        if (e.key === 'Escape') {
                                            setEditProjectId(null)
                                        }
                                    }}
                                />
                            ) : (
                                <Text>{project.name}</Text>
                            )}
                        </Box>

                        {selectedProject === project.id && (
                            <Box className={style.selectedEdit}>
                                <Box className={style.slidingContent}>
                                    <Trash
                                        width={16}
                                        height={16}
                                        onClick={() =>
                                            onDeleteProject(project.id)
                                        }
                                    />
                                    <Edit
                                        width={16}
                                        height={16}
                                        onClick={() => handleEditClick(project)}
                                    />
                                </Box>
                            </Box>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
