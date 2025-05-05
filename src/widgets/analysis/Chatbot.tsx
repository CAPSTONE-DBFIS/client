import { AnalysisSidebar } from '@/features/analysis/analysis-sidebar/ui/AnalysisSidebar'
import { Box } from '@/shared/ui/Box'
import { Sidebar } from '@/widgets/Sidebar'

import * as S from './Chatbot.css'
import { ChatRoom } from '@/features/chat/ui/ChatRoom'

export const Chatbot = () => {
    return (
        <Box className={S.layout}>
            {/* aside */}
            <Sidebar headerText="분석">
                <AnalysisSidebar />
            </Sidebar>
            {/* main */}
            <ChatRoom />
        </Box>
    )
}
