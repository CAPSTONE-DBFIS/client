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

    const COLORS = [`#E6F0FF`, '#F9E9E6', '#E5F3F5', '#F5E5F3', '#f9e0c9']

    const expandToDailyEvents = (
        task: { id: string; startDate: string; endDate: string },
        color: string
    ) => {
        const start = new Date(task.startDate)
        start.setDate(start.getDate() + 1)

        const end = new Date(task.endDate)
        end.setDate(end.getDate() + 1)

        const events = []
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            events.push({
                id: `${task.id}-${d.toISOString().split('T')[0]}`,
                title: ' ',
                start: d.toISOString().split('T')[0],
                allDay: true,
                color,
            })
        }

        return events
    }

    const events = tasks.flatMap((task, index) =>
        expandToDailyEvents(task, COLORS[index % COLORS.length])
    )

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
                dayMaxEventRows={true}
                fixedWeekCount={false}
                headerToolbar={false}
                contentHeight={560}
            />
        </Box>
    )
}
