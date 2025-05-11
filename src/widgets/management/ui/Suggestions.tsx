import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import SuggestionIcon from '@/shared/asset/icon/eye.svg?react'
import SuggestionItem from '@/widgets/management/ui/SuggestionItem'
import { getRecommend } from '@/entities/file/api/file'
import { useEffect, useState } from 'react'

interface IRecommend {
    id: number
    originalName: string
    size: number
    uploadedAt: string
    uploaderId: string
    downloadCount: number
    onTeamSelect: (teamId: number) => void
}

export default function Suggestions({ teamId }: { teamId: number }) {
    const [recommend, setRecommend] = useState<IRecommend[]>([])

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await getRecommend(teamId)
                setRecommend(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        if (teamId) {
            fetchRecommendations()
        }
    }, [teamId])

    return (
        <Box display="flex" flexDirection="column" style={{ gap: '12px' }}>
            <Box display="flex" style={{ gap: '10px' }}>
                <Box display="flex" alignItems="center" style={{ gap: '2px' }}>
                    <Text fontSize="body">제안</Text>
                    <SuggestionIcon width={12} height={12} />
                </Box>
                <Text fontSize="body" color="neutral-100">
                    TRENDB에서 자주 사용되는 파일들을 모아놓았습니다.
                </Text>
            </Box>
            <Box display="flex" style={{ gap: '32px', overflowX: 'auto' }}>
                {recommend.map((item) => (
                    <SuggestionItem
                        key={item.id}
                        id={item.id}
                        originalName={item.originalName}
                        size={item.size}
                        uploadedAt={item.uploadedAt}
                        uploaderId={item.uploaderId}
                        downloadCount={item.downloadCount}
                        teamId={teamId}
                    />
                ))}
            </Box>
        </Box>
    )
}
