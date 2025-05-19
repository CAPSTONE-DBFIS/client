import { Box } from '@/shared/ui/Box'
import * as S from './AddChat.css'
import { Text } from '@/shared/ui/Text'
import { getMyTeams } from '@/entities/user/api/team'
import { useEffect, useState } from 'react'
import { Select } from '@/shared/ui/Select/Select'
import { Button } from '@/shared/ui/Button'

interface IAddMemModal {
    onClose: () => void
    addChat: (type: '개인' | '팀', id: number | null) => void
}

interface Team {
    teamId: number
    teamName: string
    teamDescription: string
}

export const AddChat: React.FC<IAddMemModal> = ({ onClose, addChat }) => {
    const [teams, setTeams] = useState<Team[]>([])
    const [type, setType] = useState<'개인' | '팀'>('개인')
    const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null)
    const [selectedTeamName, setSelectedTeamName] = useState('')

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await getMyTeams()
                setSelectedTeamName(response.data[0].teamName)
                setSelectedTeamId(response.data[0].teamId)
                setTeams(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchTeams()
    }, [])

    return (
        <Box display="flex" flexDirection="column" className={S.container}>
            <Text fontSize="title1" fontWeight="semibold">
                채팅 추가
            </Text>
            <Text
                fontSize="body"
                color="neutral-70"
                style={{ marginTop: '8px' }}
            >
                채팅을 추가할 유형을 선택하세요.
            </Text>
            <Box
                display="flex"
                style={{ gap: '24px', marginTop: '20px', marginBottom: '20px' }}
            >
                <Button
                    width="100%"
                    size="medium"
                    type={type === '개인' ? 'secondary' : 'tertiary'}
                    fontSize="title3"
                    onClickFunc={() => setType('개인')}
                >
                    개인 채팅
                </Button>
                <Button
                    width="100%"
                    size="medium"
                    type={type === '팀' ? 'secondary' : 'tertiary'}
                    fontSize="title3"
                    onClickFunc={() => {
                        setType('팀')
                    }}
                >
                    팀 채팅
                </Button>
            </Box>
            {type === '팀' && (
                <>
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
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '8px' }}
                    >
                        <Box display="flex" style={{ gap: '36px' }}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                style={{
                                    gap: '4px',
                                    width: '100%',
                                    marginBottom: '20px',
                                }}
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
                                        setSelectedTeamId(
                                            selected?.teamId ?? null
                                        )
                                    }}
                                    options={teams.map((team) => team.teamName)}
                                    width="100%"
                                    height="42px"
                                />
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
            <Box display="flex" flexDirection="column" style={{ gap: '8px' }}>
                <Box
                    display="flex"
                    style={{ gap: '4px' }}
                    flexDirection="column"
                >
                    <Text fontSize="body" color="neutral-90">
                        👤 개인 채팅은 1:1로 대화할 수 있는 채팅방입니다.
                    </Text>
                    <Text fontSize="body" color="neutral-90">
                        👥 팀 채팅은 여러 명이 함께 소통할 수 있는 그룹
                        채팅방입니다.
                    </Text>
                </Box>
                <Text fontSize="body" color="neutral-500">
                    {type === '개인'
                        ? '개인 채팅을 생성합니다.'
                        : `팀 "${selectedTeamName}"과(와) 채팅을 생성합니다.`}
                </Text>
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
                    onClickFunc={() => {
                        addChat(type, selectedTeamId)
                        onClose()
                    }}
                >
                    생성
                </Button>
            </Box>
        </Box>
    )
}
