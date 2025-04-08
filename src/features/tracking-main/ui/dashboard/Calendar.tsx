//compontents
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
//icon
import Left from '@/shared/asset/icon/cheveron-left.svg?react'
import Right from '@/shared/asset/icon/cheveron-right.svg?react'
import { useState } from 'react'
/**
 * 대시보드 중 캘린더
 *
 * @returns {JSX.Element}
 */
export const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    // 달력 시작 날짜를 현재 달의 첫 날의 주의 일요일로 설정
    const startDay = new Date(
        year,
        month,
        1 - new Date(year, month, 1).getDay()
    )

    // 현재 달의 마지막 날
    const endDay = new Date(
        year,
        month + 1,
        6 - new Date(year, month, 1).getDay()
    )

    // 달 이동 함수
    const handleMonth = (date: number) => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + date,
                1
            )
        )
    }

    const monthNames = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
    ]
    return (
        <Box>
            <Box as={'button'} onClick={() => handleMonth(+1)}>
                {' '}
                <Left />
            </Box>
            <Text>
                {year}.{monthNames[month]}
            </Text>
            <Box as={'button'} onClick={() => handleMonth(-1)}>
                <Right />
            </Box>
            <Box>{startDay.toDateString()}</Box>
            <Box>{endDay.toDateString()}</Box>
        </Box>
    )
}
