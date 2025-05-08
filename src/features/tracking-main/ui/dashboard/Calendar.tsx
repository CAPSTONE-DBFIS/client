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
import { ITask } from '../../types/task.type'
import { Popup } from '@/shared/ui/Popup'
import { CalendarPopup } from './CalendarPopup'
import { useClickOutside } from '@/shared/lib/hooks/useOutsideClick'
import { usePopup } from '@/shared/lib/hooks/usePopup'
import { IPopupConfig } from '@/shared/types/popup.types'
import { createPortal } from 'react-dom'

interface PopupConfig extends IPopupConfig {
    content?: React.ReactNode
}

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
    tasks: ITask[]
}> = ({ tasks }) => {
    const calendarRef = useRef<FullCalendar | null>(null)
    const [currentDate, setCurrentDate] = useState(new Date()) //날짜 저장
    const { config, hidePopup, updatePopupConfig } = usePopup()
    const ref = useRef<HTMLButtonElement>(null)
    useClickOutside(ref, hidePopup) // 팝업 외부 클릭시 팝업 닫기

    const COLORS = [`#E6F0FF`, '#F9E9E6', '#E5F3F5', '#F5E5F3', '#f9e0c9']

    //task 날짜 쪼개기
    const expandToDailyEvents = (
        task: { id: string; startDate: string; endDate: string; title: string },
        color: string
    ) => {
        const start = new Date(task.startDate)
        start.setDate(start.getDate())

        const end = new Date(task.endDate)
        end.setDate(end.getDate())

        const events = []
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            events.push({
                id: `${task.id}-${d.toISOString().split('T')[0]}`,
                title: task.title,
                start: d.toISOString().split('T')[0],
                end: d.toISOString().split('T')[0],
                allDay: true,
                color,
                extendedProps: {
                    originalStartDate: task.startDate,
                    originalEndDate: task.endDate,
                },
            })
        }

        return events
    }

    const events = tasks.flatMap((task, index) =>
        expandToDailyEvents(task, COLORS[index % COLORS.length])
    )

    //달력 헤더
    const formatYearMonth = (date: Date): string => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        return `${year}.${month}`
    }

    //좌우 넘기기
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
            <Box style={{ position: 'relative' }}>
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
                    //팝업 수정필요
                    eventMouseEnter={(info) => {
                        console.log(info.event)
                        const mouseX = info.jsEvent.clientX
                        const mouseY = info.jsEvent.clientY
                        const scrollY = window.scrollY
                        const scrollX = window.scrollX

                        const popupWidth = 200
                        const popupHeight = 120
                        const offsetX = 12
                        const offsetY = 12

                        // 진짜 마우스 위치 기준 위치 계산
                        let top = mouseY + scrollY + offsetY - 1170
                        let left = mouseX + scrollX + offsetX

                        // 오른쪽/아래로 넘치면 반대로 띄우기
                        if (left + popupWidth > window.innerWidth + scrollX) {
                            left = mouseX + scrollX - popupWidth - offsetX
                        }
                        if (top + popupHeight > window.innerHeight + scrollY) {
                            top = mouseY + scrollY - popupHeight - offsetY
                        }
                        const originalStartDate =
                            info.event.extendedProps.originalStartDate
                        const originalEndDate =
                            info.event.extendedProps.originalEndDate

                        updatePopupConfig({
                            open: true,
                            type: 'default',
                            content: (
                                <Popup config={config} TOP={top} LEFT={left}>
                                    <CalendarPopup
                                        id={info.event.id}
                                        title={info.event.title}
                                        startDate={originalStartDate}
                                        endDate={originalEndDate}
                                    />
                                </Popup>
                            ),
                        } as unknown as Partial<IPopupConfig>)
                    }}
                />
                {/* 캘린더 내부X 화면에 띄우기 */}
                {config.open &&
                    createPortal(
                        (config as PopupConfig).content,
                        document.body
                    )}
            </Box>
        </Box>
    )
}
