import { Box } from '@/shared/ui/Box'

import Chip from '@/shared/asset/icon/chip.svg?react'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
import { Select } from '@/shared/ui/Select/Select'
import { useState } from 'react'

export const InsightGraph = () => {
    const [week, setWeek] = useState('')
    return (
        <Box>
            <Select
                options={['1주', '1달', '준비중']}
                currentValue={week}
                setValue={setWeek}
            />
            <Box display="flex" alignItems="center" style={{ gap: '6px' }}>
                <Chip />
                <Text fontSize="title1">기술·IT</Text>
            </Box>
            <Box display="flex" alignItems="center" style={{ gap: '6px' }}>
                <Chip />
                <Text fontSize="title1">경쟁사</Text>
            </Box>
            <Button type="secondary" size="medium" width="100%">
                다양한 인사이트 보러가기
            </Button>
        </Box>
    )
}
