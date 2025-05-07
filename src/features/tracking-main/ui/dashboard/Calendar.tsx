import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@/features/tracking-main/ui/dashboard/styles/calender.css'
import Prev from '@/shared/asset/icon/cheveron-left.svg?react'
import Next from '@/shared/asset/icon/cheveron-right.svg?react'
import { useRef, useState } from 'react'
import { Box } from '@/shared/ui/Box'
import { Text } from '@/shared/ui/Text'
import * as style from './styles/calender.css'
import { colors } from '@/app/token'
/**
 * 대시보드 중 캘린더
 * @param {string} dateStr - 변환하려는 날짜
 * @constant {string[]} COLORS - 작업 색상 배열
 * @property {string} events[].id - 작업 ID
 * @property {string} events[].title - 제목
 * @property {string} events[].start - 시작 날짜
 * @property {string} events[].end - 종료 날짜
 * @property {string} events[].color - 이벤트 색상
 * @returns {JSX.Element}
 */

export const Calendar: React.FC<{
    tasks: { id: string; startDate: string; endDate: string }[]
}> = ({ tasks }) => {
    const calendarRef = useRef<FullCalendar | null>(null)
    const [currentDate, setCurrentDate] = useState(new Date())

    //2025.03.03 -> 2025-03-03
    const parseDate = (dateStr: string) => {
        const parts = dateStr.split('.').map((s) => parseInt(s, 10))
        const date = new Date(parts[0], parts[1] - 1, parts[2])
        return date.toISOString().split('T')[0]
    }
    //endDate 날짜 포함
    const addOneDay = (dateStr: string) => {
        const date = new Date(dateStr)
        date.setDate(date.getDate() + 1)
        return date.toISOString().split('T')[0]
    }

    const COLORS = [`#E6F0FF`, '#f9c9c9', '#EBEDF0', '#f9e0c9', '#DBE7E9']

    //FullCalendar에 전달할 데이터 생성
    const events = tasks.map((task, index) => ({
        id: task.id,
        title: ' ',
        start: parseDate(task.startDate),
        end: addOneDay(parseDate(task.endDate)),
        color: COLORS[index % COLORS.length],
    }))

    const formatYearMonth = (date: Date): string => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        return `${year}.${month}`
    }

    const handlePrev = () => {
        const api = calendarRef.current?.getApi()
        api?.prev()
        setCurrentDate(api?.getDate() ?? new Date())
    }

    const handleNext = () => {
        const api = calendarRef.current?.getApi()
        api?.next()
        setCurrentDate(api?.getDate() ?? new Date())
    }

    return (
        <Box>
            <Box className={style.calendarBox}>
                <Box as={'button'} onClick={handlePrev} className={style.Btn}>
                    <Prev width={24} height={24} fill={colors['neutral-600']} />
                </Box>
                <Text
                    fontSize="largeTitle"
                    fontWeight="semibold"
                    color="neutral-600"
                >
                    {formatYearMonth(currentDate)}
                </Text>
                <Box as={'button'} onClick={handleNext} className={style.Btn}>
                    <Next width={24} height={24} fill={colors['neutral-600']} />
                </Box>
            </Box>
            <FullCalendar
                ref={(calendar) => {
                    if (calendar) {
                        calendarRef.current = calendar
                    }
                }}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventDisplay="block"
                height="auto"
                dayMaxEventRows
                fixedWeekCount={false}
                headerToolbar={false}
            />
        </Box>
    )
}
