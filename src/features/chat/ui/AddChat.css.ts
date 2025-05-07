import { style } from '@vanilla-extract/css'

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    gap: '12px',
    padding: '40px 20px',
})

export const label = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
})
