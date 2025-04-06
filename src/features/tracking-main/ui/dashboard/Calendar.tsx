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

    // 현재 달의 첫 날
    const firstDayOfMonth = new Date(year, month, 1)
    // 달력 시작 날짜를 현재 달의 첫 날의 주의 일요일로 설정
    const startDay = new Date(firstDayOfMonth)
    startDay.setDate(1 - firstDayOfMonth.getDay())

    // 현재 달의 마지막 날
    const lastDayOfMonth = new Date(year, month + 1, 0)

    // 달력 끝 날짜를 현재 달의 마지막 날의 주의 토요일로 설정
    const endDay = new Date(lastDayOfMonth)
    endDay.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()))

    const handlePrevMonth = () => {
        // 이전 달로 이동
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        )
    }

    const handleNextMonth = () => {
        // 다음 달로 이동
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
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
            <Box as={'button'} onClick={handlePrevMonth}>
                {' '}
                <Left />
            </Box>
            <Text>
                {year}.{monthNames[month]}
            </Text>
            <Box as={'button'} onClick={handleNextMonth}>
                <Right />
            </Box>
            <Box>{firstDayOfMonth.toDateString()}</Box>
            <Box>{lastDayOfMonth.toDateString()}</Box>
        </Box>
    )
}
