import { usePopup } from '@/shared/lib/hooks/usePopup'
import { Box } from '@/shared/ui/Box'
import { MotionDiv } from '@/shared/ui/MotionDiv/MotionDiv'
import { Popup } from '@/shared/ui/Popup'
import { Text } from '@/shared/ui/Text'
import { useState } from 'react'

export type SentimentRatio = {
    positive: number // 0 ~ 100
    neutral: number
    negative: number
    positive_percent: number // 0 ~ 100
    neutral_percent: number
    negative_percent: number
}

export default function SentimentBar({
    sentiment,
}: {
    sentiment: SentimentRatio
}) {
    const { positive_percent, neutral_percent, negative_percent } = sentiment
    const [hovered, setHovered] = useState<
        'positive' | 'neutral' | 'negative' | null
    >(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const { config, showPopup, hidePopup } = usePopup({ arrow: 'none' })
    const handleMouseLeave = () => {
        setHovered(null)
        hidePopup()
    }
    const handleMouseEnter = (type: 'positive' | 'neutral' | 'negative') => {
        setHovered(type)
        showPopup()
    }
    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>,
        type: 'positive' | 'neutral' | 'negative' | null
    ) => {
        if (hovered !== type) setHovered(type)
        setMousePos({ x: e.clientX, y: e.clientY })
        setHovered(type)
        showPopup()
    }
    return (
        <Box display="flex" flexDirection="column" style={{ gap: '8px' }}>
            <Text>총 기사 수 : </Text>
            <Box display="flex" style={{ gap: '12px' }}>
                <Box display="flex" style={{ gap: '4px' }} alignItems="center">
                    <Box
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#2b7fff',
                        }}
                    />
                    <Text fontSize="subHeadline" color="neutral-100">
                        긍정
                    </Text>
                </Box>
                <Box display="flex" style={{ gap: '4px' }} alignItems="center">
                    <Box
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#98a1b0',
                        }}
                    />
                    <Text fontSize="subHeadline" color="neutral-100">
                        중립
                    </Text>
                </Box>
                <Box display="flex" style={{ gap: '4px' }} alignItems="center">
                    <Box
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#ca4b2b',
                        }}
                    />
                    <Text fontSize="subHeadline" color="neutral-100">
                        부정
                    </Text>
                </Box>
            </Box>
            <Box
                style={{
                    width: '100%',
                    height: '16px',
                    borderRadius: '8px',
                    backgroundColor: '#f5f6f7',
                    display: 'flex',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <MotionDiv
                    initial={{ width: 0 }}
                    animate={{ width: `${positive_percent}%` }}
                    transition={{ duration: 0.6 }}
                    style={{
                        backgroundColor: '#2b7fff',
                        height: '100%',
                    }}
                    onMouseEnter={() => handleMouseEnter('positive')}
                    onMouseMove={(e) => handleMouseMove(e, 'positive')}
                    onMouseLeave={handleMouseLeave}
                />
                <MotionDiv
                    initial={{ width: 0 }}
                    animate={{ width: `${neutral_percent}%` }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        backgroundColor: '#98a1b0',
                        height: '100%',
                    }}
                    onMouseEnter={() => handleMouseEnter('neutral')}
                    onMouseMove={(e) => handleMouseMove(e, 'neutral')}
                    onMouseLeave={handleMouseLeave}
                />
                <MotionDiv
                    initial={{ width: 0 }}
                    animate={{ width: `${negative_percent}%` }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        backgroundColor: '#ca4b2b',
                        height: '100%',
                    }}
                    onMouseEnter={() => handleMouseEnter('negative')}
                    onMouseMove={(e) => handleMouseMove(e, 'negative')}
                    onMouseLeave={handleMouseLeave}
                />
            </Box>
            <Popup
                config={config}
                TOP={mousePos.y - 600}
                LEFT={mousePos.x - 60}
            >
                {hovered && (
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{ gap: '4px', padding: '8px' }}
                    >
                        <Text fontSize="subHeadline" fontWeight="semibold">
                            {hovered === 'positive' && '긍정'}
                            {hovered === 'neutral' && '중립'}
                            {hovered === 'negative' && '부정'}
                        </Text>
                        <Text fontSize="subHeadline" fontWeight="semibold">
                            {sentiment[hovered]}건
                        </Text>
                        <Text fontSize="subHeadline" fontWeight="semibold">
                            {sentiment[`${hovered}_percent`]}%
                        </Text>
                    </Box>
                )}
            </Popup>
        </Box>
    )
}
