import Button from '@/entities/file/ui/Button'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './FileList.css'
import FolderIcon from '@/shared/asset/icon/folder.svg?react'

export default function FileList() {
    return (
        <Box display="flex" flexDirection="column" style={{ gap: '12px' }}>
            <Text>All files</Text>
            <Box display="flex" style={{ gap: '4px' }}>
                <Button>최근 순</Button>
                <Button>오래된 순</Button>
                <Button>이름 순</Button>
            </Box>
            <Box className={S.fileTable}>
                <Box className={S.fileTableRow + ' ' + S.fileTableHeader}>
                    <Text fontSize="title3">이름</Text>
                    <Text fontSize="title3">확장자</Text>
                    <Text fontSize="title3">소유자</Text>
                </Box>
                <Box className={S.fileTableRow}>
                    <Box
                        display="flex"
                        alignItems="center"
                        style={{ gap: '8px' }}
                    >
                        <FolderIcon width={24} height={24} />
                        <Text color="neutral-800">folder</Text>
                    </Box>
                    <Text color="neutral-800">folder</Text>
                    <Text color="neutral-800">김세현</Text>
                </Box>
            </Box>
        </Box>
    )
}
