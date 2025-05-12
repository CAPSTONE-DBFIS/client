import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as S from './SuggestionItem.css'
import FileIcon from '@/shared/asset/icon/clipboard-copy.svg?react'
import { getDownload } from '@/entities/file/api/file'
import { mime } from '../lib/mime'

interface IRecommend {
    id: number
    originalName: string
    size: number
    uploadedAt: string
    uploaderId: string
    downloadCount: number
    teamId: number
}

export default function SuggestionItem({
    id,
    originalName,
    uploadedAt,
    teamId,
}: IRecommend) {
    const extension = originalName.split('.').pop() || ''
    const baseName =
        originalName.slice(0, originalName.lastIndexOf('.')) || originalName
    const truncatedName =
        baseName.length > 15 ? `${baseName.slice(0, 15)}...` : baseName

    const handleDownload = async () => {
        try {
            const extensionToMime = mime

            const extension =
                originalName.split('.').pop()?.toLowerCase() || 'octet-stream'
            const mimeType =
                extensionToMime[extension] || 'application/octet-stream'

            const response = await getDownload(teamId, id)

            const blob = new Blob([response.data], { type: mimeType })

            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = originalName
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        } catch (error: unknown) {
            if (
                error &&
                typeof error === 'object' &&
                'response' in error &&
                error.response &&
                typeof error.response === 'object' &&
                'status' in error.response &&
                error.response.status === 403
            ) {
                alert('팀 접근 권한이 없습니다.')
            } else {
                alert('다운로드 중 오류가 발생했습니다.')
            }
        }
    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            style={{ gap: '16px' }}
            onClick={handleDownload}
        >
            <Box className={S.Icon}>
                <FileIcon width={60} height={60} />
                <Text fontWeight="bold" fontSize="body">
                    .{extension}
                </Text>
            </Box>
            <Box display="flex" flexDirection="column" style={{ gap: '2px' }}>
                <Text>{truncatedName}</Text>
                <Text color="neutral-100">{uploadedAt.slice(0, 10)}</Text>
            </Box>
        </Box>
    )
}
