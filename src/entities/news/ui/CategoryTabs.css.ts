import { style } from '@vanilla-extract/css'

export const container = style({
    background: '#f5f6f7',
    padding: '6px 8px',
    borderRadius: '18px',
    minWidth: '630px',

    display: 'inline-flex',
    justifyContent: 'center',
    gap: '12px',
    width: 'fit-content',
})

export const button = style({
    padding: '8px 14px',
    borderRadius: '15px',
})
