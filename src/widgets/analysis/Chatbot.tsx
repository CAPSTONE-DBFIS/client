import { AnalysisSidebar } from '@/features/analysis/analysis-sidebar/ui/AnalysisSidebar'
import { Box } from '@/shared/ui/Box'
import { Sidebar } from '@/widgets/Sidebar'

import * as S from './Chatbot.css'
import { ChatRoom } from '@/features/chat/ui/ChatRoom'
import { useState } from 'react'

export const Chatbot = () => {
    const [id, setId] = useState(-1)
    const [userAnalysisStart, setUserAnalysisStart] = useState(false)

    return (
        <Box className={S.layout}>
            {/* aside */}
            <Sidebar headerText="분석">
                <AnalysisSidebar
                    id={id}
                    setId={setId}
                    userAnalysisStart={userAnalysisStart}
                />
            </Sidebar>
            {/* main */}
            <ChatRoom id={id} setUserAnalysisStart={setUserAnalysisStart} />
        </Box>
    )
}
