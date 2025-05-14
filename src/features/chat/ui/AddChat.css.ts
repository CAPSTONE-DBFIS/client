import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const container = style({
    flexDirection: 'column',
    justifyContent: 'center',
    width: '650px',
    borderRadius: '4px',
    backgroundColor: colors['white'],
    padding: '30px',
})

export const tableContainer = style({
    padding: '12px 0',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
})

export const tableHeader = style({
    display: 'flex',
    width: '100%',
    backgroundColor: colors['neutral-10'],
    padding: '12px 4px',
})

export const rowBox = style({
    overflowY: 'scroll',
    height: '150px',
})

export const tableRow = style({
    display: 'flex',
    width: '100%',
    padding: '16px 0 16px 6px',
    borderBottom: `1px solid ${colors['neutral-30']}`,
    borderRadius: '4px',
    ':last-child': {
        borderBottom: 'none',
    },
    ':hover': {
        backgroundColor: colors['neutral-20'],
    },
    ':active': {
        backgroundColor: colors['neutral-20'],
    },
})

export const nameCell = style({
    flex: '0.5',
    display: 'flex',
    alignItems: 'center',
})

export const presetCell = style({
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
})
