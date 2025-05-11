import { Box } from '@/shared/ui/Box'
import * as S from './Button.css'
import { Text } from '@/shared/ui/Text'

export default function Button({
    children,
    onClick,
    isActive = false,
}: {
    children: React.ReactNode
    onClick: () => void
    isActive?: boolean
}) {
    return (
        <Box
            as="button"
            className={`${S.Container} ${isActive ? S.Active : ''}`}
            onClick={onClick}
        >
            <Text className={isActive ? S.Active : ''} fontSize="subHeadline">
                {children}
            </Text>
        </Box>
    )
}
