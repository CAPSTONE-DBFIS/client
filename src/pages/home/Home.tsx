import { Analysis } from '@/features/home/ui/analysis/Analysis'
import { Article } from '@/features/home/ui/article/Article'
import { HomeWidget } from '@/features/home/ui/widget/HomeWidget'
import { Insight } from '@/features/home/ui/insight/Insight'
import { Box } from '@/shared/ui/Box'

export function Home() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ gap: '64px', padding: '36px' }}
        >
            <HomeWidget />
            <Article />
            <Analysis />
            <Insight />
        </Box>
    )
}
