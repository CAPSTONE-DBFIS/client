import { style } from '@vanilla-extract/css'
import { colors } from '@/app/token'

export const container = style({
    display: 'flex',
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
    height: '220px',
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
    flex: '2',
    display: 'flex',
    alignItems: 'center',
})

export const presetCell = style({
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
})

export const actionsCell = style({
    flex: '1.2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
})

export const basicPresetTag = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 12px',
    borderRadius: '16px',
    backgroundColor: colors['blue-50'],
})

export const customPresetTag = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 12px',
    borderRadius: '16px',
    backgroundColor: colors['red-50'],
})

export const actionButtons = style({
    display: 'flex',
})

export const actionButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    padding: '4px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
    ':hover': {
        backgroundColor: colors['neutral-10'],
    },
})

export const addButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '16px',
    backgroundColor: `colors['primary-80']`,
    color: colors['white'],
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.2s ease',
    ':hover': {
        backgroundColor: ` colors['primary-90']`,
    },
    ':active': {
        backgroundColor: `colors['primary-100']`,
    },
})
