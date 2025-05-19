import { Box } from '@/shared/ui/Box'
import * as S from './TeamModal.css'
import { TextInput } from '@/shared/ui/Input/TextInput'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
import { postTeams } from '@/entities/user/api/team'
import { useState } from 'react'

interface ITeamModal {
    onClose: () => void
}

export const TeamModal: React.FC<ITeamModal> = ({ onClose }) => {
    const [teamName, setTeamName] = useState('')
    const [teamDescription, setTeamDescription] = useState('')

    const handleCreateTeam = async () => {
        try {
            const response = await postTeams({
                name: teamName,
                description: teamDescription,
                role: '리더',
            })
            console.log(response.data)
            alert('팀이 성공적으로 생성되었습니다.')
            onClose()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Box display="flex" flexDirection="column" className={S.container}>
            <Text fontSize="title1" fontWeight="semibold">
                팀 추가하기
            </Text>
            <Box
                display="flex"
                flexDirection="column"
                style={{ gap: '10px', paddingTop: '15px' }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '4px' }}
                >
                    <Box as={'label'} htmlFor="keyword">
                        <Text fontSize="body" color="neutral-90">
                            팀 이름
                        </Text>
                    </Box>
                    <TextInput
                        width="100%"
                        size="small"
                        placeholder="생성할 팀 이름을 입력해주세요."
                        height="42px"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                    />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    style={{ gap: '4px' }}
                >
                    <Box as={'label'} htmlFor="keyword">
                        <Text fontSize="body" color="neutral-90">
                            팀 설명
                        </Text>
                    </Box>
                    <TextInput
                        width="100%"
                        size="small"
                        placeholder="생성할 팀을 설명해주세요."
                        height="42px"
                        value={teamDescription}
                        onChange={(e) => setTeamDescription(e.target.value)}
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
                    onClickFunc={handleCreateTeam}
                >
                    생성
                </Button>
            </Box>
        </Box>
    )
}
