import { Box } from "@/shared/ui/Box"
import { Text } from "@/shared/ui/Text"
import * as S from './SuggestionItem.css'
import FileIcon from '@/shared/asset/icon/clipboard-copy.svg?react'

export default function SuggestionItem() {
    return (
        <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
            <Box className={S.Icon}>
                <FileIcon width={60} height={60}/>
                <Text fontWeight="bold" fontSize="body">.pdf</Text>
            </Box>
            <Box display="flex" flexDirection="column" style={{ gap: '2px' }}>
                <Text>최종본.pdf</Text>
                <Text color="neutral-100">100MB</Text>
            </Box>
        </Box>
    )
}