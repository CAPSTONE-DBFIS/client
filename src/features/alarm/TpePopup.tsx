import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './TPePopup.css'

interface Props {
    onOpenModal: (type: 'team' | 'persona') => void
}

export const TpePopup: React.FC<Props> = ({ onOpenModal }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{ width: '140px', padding: '10px', gap: '10px' }}
        >
            <Box
                as={'button'}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                className={S.buttonStyle}
                onClick={() => onOpenModal('team')}
            >
                <Text fontSize="subHeadline" color="neutral-900">
                    팀 설정
                </Text>
            </Box>
            <Box
                as={'button'}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                className={S.buttonStyle}
                onClick={() => onOpenModal('persona')}
            >
                <Text fontSize="subHeadline" color="neutral-900">
                    페르소나 설정
                </Text>
            </Box>
        </Box>
    )
}
