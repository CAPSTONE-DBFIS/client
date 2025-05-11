import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as style from './Team.css'

interface ITeam {
    teamId: number
    teamName: string
    isSelected: boolean
    onClick: (teamId: number) => void
}

export const Team: React.FC<ITeam> = ({
    teamId,
    teamName,
    isSelected,
    onClick,
}) => {
    return (
        <Box
            display="flex"
            fontSize="body"
            key={teamId}
            className={`
                ${style.teamItem} 
                ${style.menuItemClick[isSelected ? 'selected' : 'default']}
            `}
            onClick={() => onClick(teamId)}
        >
            <Text
                fontSize="body"
                className={`${style.teamIcon} ${isSelected ? style.selectedTeamIcon : ''}`}
            >
                {teamName.charAt(0)}
            </Text>
            <Text>{teamName}</Text>
        </Box>
    )
}
