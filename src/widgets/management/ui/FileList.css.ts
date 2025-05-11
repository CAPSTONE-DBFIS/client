import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const fileTable = style({
    display: 'grid',
    height: '222px',
    overflowY: 'auto',
})

export const fileTableRow = style({
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr',
    gap: '12px',
    padding: '12px 0px',
    ':hover': {
        backgroundColor: colors['neutral-20'],
    },
})

export const selectedRow = style({
    backgroundColor: colors['neutral-20'],
})

export const fileTableHeader = style({
    borderBottom: '1px solid ' + colors['neutral-30'],
})

export const goBackRow = style([
    fileTableRow,
    {
        backgroundColor: colors['neutral-10'],
        cursor: 'pointer',
        borderBottom: '1px solid ' + colors['neutral-30'],
        ':hover': {
            backgroundColor: colors['neutral-30'],
        },
    },
])
