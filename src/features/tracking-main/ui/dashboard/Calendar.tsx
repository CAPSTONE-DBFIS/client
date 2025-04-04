import { Box } from '@/shared/ui/Box'
import { useState } from 'react'
/**
 * 대시보드 중 캘린더
 *
 * @returns {JSX.Element}
 */
export const Calendar = () => {
    const currentDate = useState(new Date())[0]

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
    return (
        <Box>
            <Box>
                {year}
                {month + 1}
            </Box>
            <Box>{firstDayOfMonth.toDateString()}</Box>
            <Box>{lastDayOfMonth.toDateString()}</Box>
        </Box>
    )
}
