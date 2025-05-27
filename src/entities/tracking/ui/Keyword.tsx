import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'

import Speak from '@/shared/asset/icon/speakerphone.svg?react'
import { colors } from '@/app/token'
import * as style from './Keyword.css'

export const Keyword = () => {
    return (
        <Box style={{ padding: '24px 0', position: 'relative' }}>
            <Box style={{ padding: '0 24px' }}>
                <Text fontSize="title1" fontWeight="bold">
                    {'n'}주차 핵심 트렌드 인사이트
                </Text>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                style={{ gap: '25px', marginTop: '25px' }}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    className={style.graphContainer}
                >
                    <Box className={style.graph}>
                        <Text fontSize="title2">연관 키워드 언급량 통계</Text>
                        <Box
                            style={{
                                background: colors['neutral-30'],
                            }}
                        />
                    </Box>
                    <Box className={style.graph}>
                        <Text fontSize="title2">키워드 긍부정도</Text>
                        <Box
                            style={{
                                background: colors['neutral-30'],
                                width: '100%',
                            }}
                        />
                    </Box>
                </Box>
                <Box className={style.textBox}>
                    <Box
                        display="flex"
                        style={{ gap: '8px', marginBottom: '16px' }}
                    >
                        <Speak />
                        <Text fontSize="title2">한줄 요약</Text>
                    </Box>
                    <Text>{llm[0].llmDescription}</Text>
                </Box>
            </Box>
        </Box>
    )
}
