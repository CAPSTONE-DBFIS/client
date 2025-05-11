import { Box } from '@/shared/ui/Box'
import * as S from './Button.css'
import { Text } from '@/shared/ui/Text'

export default function Button({
    children,
    onClick,
}: {
    children: React.ReactNode
    onClick: () => void
}) {
    return (
        <Box as="button" className={S.Container} onClick={onClick}>
            <Text fontSize="subHeadline">{children}</Text>
        </Box>
    )
}
