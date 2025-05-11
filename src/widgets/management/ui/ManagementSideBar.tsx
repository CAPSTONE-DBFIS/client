import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as style from './ManangementSideBar.css'
import { useState } from 'react'
import { Team } from '@/entities/file/ui/Team'

interface Team {
    teamId: number
    teamName: string
}
interface IManagementSideBar {
    teamItems: Team[]
    selectedTeamId: number | null
    onTeamSelect: (teamId: number) => void
}

export default function ManagementSideBar({
    teamItems,
    selectedTeamId,
    onTeamSelect,
}: IManagementSideBar) {
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null)
    const [recentTeams, setRecentTeams] = useState<Team[]>([])

    const projectTeamClick = (teamId: number) => {
        if (selectedTeam !== teamId) {
            setSelectedTeam(teamId)

            //  팀의 id가 클릭한 팀의 id와 같은지 확인
            const clickedTeam = teamItems.find((team) => team.teamId === teamId)

            if (clickedTeam) {
                // 팀의 id가 클릭한 팀의 id와 다른지 확인 -> 중복 방지
                const filteredRecent = recentTeams.filter(
                    (team) => team.teamId !== teamId
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
                            key={team.teamId}
                            className={`
                                ${style.teamItem} 
                                ${style.menuItemClick[selectedTeam === team.teamId ? 'selected' : 'default']}
                            `}
                            onClick={() => projectTeamClick(team.teamId)}
                        >
                            <Text
                                fontSize="body"
                                className={`${style.teamIcon} ${selectedTeam === team.teamId ? style.selectedTeamIcon : ''}`}
                            >
                                {team.teamName.charAt(0)}
                            </Text>
                            <Text>{team.teamName}</Text>
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
                    <Team
                        key={'team' + team.teamId}
                        teamId={team.teamId}
                        teamName={team.teamName}
                        isSelected={selectedTeamId === team.teamId}
                        onClick={onTeamSelect}
                    />
                ))}
            </Box>
        </Box>
    )
}
