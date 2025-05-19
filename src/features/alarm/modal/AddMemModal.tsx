import { Box } from '@/shared/ui/Box'
import * as S from './AddMemModal.css'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
import { getMyTeams, postTeamMember } from '@/entities/user/api/team'
import { useEffect, useState } from 'react'
import { Select } from '@/shared/ui/Select/Select'
import { Button } from '@/shared/ui/Button'

interface IAddMemModal {
    onClose: () => void
}

interface Team {
    teamId: number
    teamName: string
    teamDescription: string
}

export const AddMemModal: React.FC<IAddMemModal> = ({ onClose }) => {
    const [teams, setTeams] = useState<Team[]>([])
    const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null)
    const [selectedTeamName, setSelectedTeamName] = useState('')
    const [selectedRole, setSelectedRole] =
        useState<(typeof roleOptions)[number]['label']>('')
    const [memberEmail, setMemberEmail] = useState('')
    const roleOptions = [
        { label: '프론트엔드', value: 'frontend' },
        { label: '백엔드', value: 'backend' },
        { label: 'AI', value: 'ai' },
        { label: '디자인', value: 'design' },
        { label: 'PM', value: 'pm' },
    ]

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await getMyTeams()
                setTeams(response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchTeams()
    }, [])

    const handleAddMember = async () => {
        if (!selectedTeamId) {
            alert('팀을 선택해주세요.')
            return
        }
        if (!memberEmail || !selectedRole) {
            alert('팀원 이메일과 역할을 입력해주세요.')
            return
        }

        try {
            const response = await postTeamMember(selectedTeamId, {
                memberId: memberEmail,
                role: selectedRole,
                teamRole: '팀원',
            })
            console.log(response.data)
            alert('팀원이 성공적으로 추가되었습니다.')
            onClose()
        } catch (error) {
            console.error(error)
            alert('팀원 추가 중 오류가 발생했습니다.')
        }
    }

    return (
        <Box display="flex" flexDirection="column" className={S.container}>
            <Text fontSize="title1" fontWeight="semibold">
                팀원 추가
            </Text>
            <Box
                display="flex"
                flexDirection="row"
                style={{ width: '100%', gap: '20px' }}
            >
                <Box className={S.tableContainer}>
                    <Box className={S.tableHeader}>
                        <Box className={S.nameCell}>
                            <Text fontSize="title3" color="neutral-70">
                                이름
                            </Text>
                        </Box>
                        <Box className={S.presetCell}>
                            <Text fontSize="title3" color="neutral-70">
                                설명
                            </Text>
                        </Box>
                    </Box>

                    <Box className={S.rowBox}>
                        {teams.map((team) => (
                            <Box
                                key={team.teamId}
                                className={S.tableRow}
                                onClick={() => {
                                    setSelectedTeamName(team.teamName)
                                    setSelectedTeamId(team.teamId)
                                }}
                            >
                                <Box className={S.nameCell}>
                                    <Text>{team.teamName}</Text>
                                </Box>
                                <Box className={S.presetCell}>
                                    <Text>{team.teamDescription}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" style={{ gap: '8px' }}>
                <Box display="flex" style={{ gap: '36px' }}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '4px', width: '100%' }}
                    >
                        <Box as={'label'} htmlFor="team">
                            <Text fontSize="body" color="neutral-90">
                                팀 선택
                            </Text>
                        </Box>
                        <Select
                            currentValue={selectedTeamName}
                            setValue={(value) => {
                                setSelectedTeamName(value)
                                const selected = teams.find(
                                    (t) => t.teamName === value
                                )
                                setSelectedTeamId(selected?.teamId ?? null)
                            }}
                            options={teams.map((team) => team.teamName)}
                            width="100%"
                            height="42px"
                        />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '4px', width: '100%' }}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            style={{ gap: '4px', width: '100%' }}
                        >
                            <Box as={'label'} htmlFor="role">
                                <Text fontSize="body" color="neutral-90">
                                    팀 역할
                                </Text>
                            </Box>

                            <Select
                                currentValue={selectedRole}
                                setValue={setSelectedRole}
                                options={roleOptions.map((r) => r.label)}
                                width="100%"
                                height="42px"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '4px' }}
                >
                    <Box as={'label'} htmlFor="keyword">
                        <Text fontSize="body" color="neutral-90">
                            팀원 ID
                        </Text>
                    </Box>
                    <TextInput
                        width="100%"
                        size="small"
                        placeholder="초대할 팀원의 ID를 입력해주세요."
                        height="42px"
                        value={memberEmail}
                        onChange={(e) => setMemberEmail(e.target.value)}
                    />
                </Box>
            </Box>
            <Box display="flex" style={{ gap: '24px', marginTop: '20px' }}>
                <Button
                    width="100%"
                    size="medium"
                    type="tertiary"
                    fontSize="title3"
                    onClickFunc={onClose}
                >
                    이전
                </Button>
                <Button
                    width="100%"
                    size="medium"
                    type="primary"
                    fontSize="title3"
                    onClickFunc={handleAddMember}
                >
                    생성
                </Button>
            </Box>
        </Box>
    )
}
