import { Box } from '@/shared/ui/Box'
import * as S from './Button.css'
import { Text } from '@/shared/ui/Text'

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <Box as={'button'} className={S.Container}>
            <Text fontSize="subHeadline">{children}</Text>
        </Box>
    )
}
