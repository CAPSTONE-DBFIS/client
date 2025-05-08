/**
 * task의 기간을 각 일별로 나눠 FullCalendar 전달달
 * @param {Object} task - 작업
 * @param {string} task.id - 작업 ID
 * @param {string} task.startDate - 시작 날짜
 * @param {string} task.endDate - 종료 날짜
 * @param {string} task.title - 제목
 * @param {string} color - 이벤트 색상
 * @returns {Array<Object>}
 *
 */
export const expandToDailyEvents = (
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
