import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as style from './ManangementSideBar.css'
import { useState } from 'react'

interface Team {
    id: number
    name: string
}
const teamItems: Team[] = [
    { id: 1, name: '수퍼 팀' },
    { id: 2, name: '메가 팀' },
    { id: 3, name: '메메메가 팀' },
    { id: 4, name: '수수퍼 팀' },
    // 다른 팀 추가 가능
]

export default function ManagementSideBar() {
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null)
    const [recentTeams, setRecentTeams] = useState<Team[]>([])

    const projectTeamClick = (teamId: number) => {
        if (selectedTeam !== teamId) {
            setSelectedTeam(teamId)

            //  팀의 id가 클릭한 팀의 id와 같은지 확인
            const clickedTeam = teamItems.find((team) => team.id === teamId)

            if (clickedTeam) {
                // 팀의 id가 클릭한 팀의 id와 다른지 확인 -> 중복 방지
                const filteredRecent = recentTeams.filter(
                    (team) => team.id !== teamId
                )

                // 선택한 팀를 최근 팀 목록의 맨 앞에 추가
                const newRecentTeams = [clickedTeam, ...filteredRecent]

                // 최대 3개까지 유지
                setRecentTeams(newRecentTeams.slice(0, 3))
            }
        }
    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{ gap: '12px', marginTop: '12px' }}
        >
            {/* 최근 팀 섹션 */}
            <Text fontSize="subHeadline" className={style.sectionHeader}>
                최근 팀
            </Text>
            <Box className={style.projectBox}>
                {recentTeams.length > 0 ? (
                    recentTeams.map((team) => (
                        <Box
                            display="flex"
                            fontSize="body"
                            key={team.id}
                            className={`
                                ${style.teamItem} 
                                ${style.menuItemClick[selectedTeam === team.id ? 'selected' : 'default']}
                            `}
                            onClick={() => projectTeamClick(team.id)}
                        >
                            <Text
                                fontSize="body"
                                className={`${style.teamIcon} ${selectedTeam === team.id ? style.selectedTeamIcon : ''}`}
                            >
                                {team.name.charAt(0)}
                            </Text>
                            <Text>{team.name}</Text>
                        </Box>
                    ))
                ) : (
                    <Box style={{ height: '36px' }}> </Box>
                )}
            </Box>

            {/* 모든 팀 섹션 */}
            <Text fontSize="subHeadline" className={style.sectionHeader}>
                모든 팀
            </Text>
            <Box className={style.projectBox}>
                {teamItems.map((team) => (
                    <Box
                        display="flex"
                        fontSize="body"
                        key={team.id}
                        className={`
                            ${style.teamItem} 
                            ${style.menuItemClick[selectedTeam === team.id ? 'selected' : 'default']}
                        `}
                        onClick={() => projectTeamClick(team.id)}
                    >
                        <Text
                            fontSize="body"
                            className={`${style.teamIcon} ${selectedTeam === team.id ? style.selectedTeamIcon : ''}`}
                        >
                            {team.name.charAt(0)}
                        </Text>
                        <Text>{team.name}</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
