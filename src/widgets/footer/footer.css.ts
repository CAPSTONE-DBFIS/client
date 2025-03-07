import { style } from '@vanilla-extract/css'

export const footerContainer = style({
    height: '200px',
})

export const footerWrapper = style({
    width: '1024px',
    gap: '24px',
    userSelect: 'none',
    '@media': {
        'screen and (max-width: 1024px)': {
            width: '100%',
        },
    },
})

export const footerColumn = style({
    display: 'flex',
    gap: '48px',
    userSelect: 'none',
})
