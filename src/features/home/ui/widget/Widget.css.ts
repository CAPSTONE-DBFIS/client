import { style } from '@vanilla-extract/css'

export const container = style({
    width: '235px',
    height: '320px',
    padding: '32px 16px',
    borderRadius: '20px',
    boxShadow:
        '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',

    ':hover': {
        transform: 'scale(1.05)',
    },
})
export const description = style({
    whiteSpace: 'pre-wrap',
})
export const img = style({
    width: '150px',
    height: '150px',
})
