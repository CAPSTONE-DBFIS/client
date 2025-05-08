import { colors, fontSizes } from '@/app/token'
import { style } from '@vanilla-extract/css'
import { globalStyle } from '@vanilla-extract/css'

export const calendarBox = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '7px',
    marginBottom: '20px',
})

export const Btn = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

globalStyle('.fc-daygrid-day-frame', {
    padding: '6px 0',
    maxHeight: '90px',
    textAlign: 'left',
    backgroundColor: colors.white,
    border: '#E0E0E0',
    overflow: 'hidden',
})

globalStyle('.fc .fc-daygrid-day-top', {
    flexDirection: 'row',
})

globalStyle('.fc-event-title-container ', {
    height: '10px',
})

// 오늘 날짜 강조
globalStyle('.fc-day-today', {
    backgroundColor: '#fffbe6', // 연한 노랑
    border: '1px solid #f0c36d',
})

// 날짜 숫자 스타일 (왼쪽 상단 날짜 텍스트)
globalStyle('.fc-daygrid-day-number', {
    color: '#666666',
    fontSize: `${fontSizes.body.fontSize}px`,
    marginLeft: '8px',
})

globalStyle('.fc-event', {
    marginBottom: '4px',
    borderRadius: '1px',
})

globalStyle('.fc-direction-ltr .fc-daygrid-event.fc-event-start', {
    marginLeft: '0px',
})

globalStyle('.fc-direction-ltr .fc-daygrid-event.fc-event-end', {
    marginRight: '0px',
})

globalStyle('.fc .fc-col-header-cell-cushion', {
    color: '#666666',
    fontSize: `${fontSizes.body.fontSize}px`,
    padding: '0',
})

//보더제거
globalStyle('.fc .fc-scrollgrid, .fc .fc-scrollgrid-sync-table', {
    border: 'none !important',
})

globalStyle('.fc .fc-col-header-cell', {
    borderBottom: 'none !important',
    borderTop: 'none !important',
    borderLeft: 'none !important',
    borderRight: 'none !important',
    background: colors['neutral-10'],
})

globalStyle('.fc .fc-daygrid-body td:nth-child(7)', {
    borderRight: '0 !important',
})

globalStyle('.fc .fc-scrollgrid-sync-table', {
    borderCollapse: 'collapse',
})

globalStyle('.fc .fc-scrollgrid thead th[role="presentation"]', {
    borderRight: 'none !important',
})

globalStyle(' td[role="presentation"]', {
    borderBottom: 'none !important',
})
globalStyle('.fc .fc-col-header-cell-cushion', {
    backgroundColor: colors['neutral-10'],
    width: '100px',
    height: '41px',
})

globalStyle('.fc .fc-more-link', {
    fontSize: `${fontSizes.body.fontSize}px`,

    display: 'inline-block',
    padding: '2px 6px',
    color: colors['neutral-70'],
    borderRadius: '4px',
    textDecoration: 'none',
    cursor: 'pointer',
    lineHeight: '1.4',
    textAlign: 'center',
    whiteSpace: 'nowrap',
})

globalStyle(' .fc-daygrid-block-event .fc-event-title', {
    display: 'none',
})
