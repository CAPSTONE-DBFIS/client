import { AnalysisButton } from '@/features/home/ui/analysis/AnalysisButton'
import { SearchRank } from '@/features/home/ui/analysis/SearchRank'
import { Box } from '@/shared/ui/Box'

import * as S from './Analysis.css'
export const Analysis = () => {
    return (
        <Box display="flex" style={{ gap: '12px' }} className={S.container}>
            <SearchRank />
            <AnalysisButton />
        </Box>
    )
}
