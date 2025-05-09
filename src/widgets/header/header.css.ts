import { style } from '@vanilla-extract/css'

export const headerContainer = style({
    height: '80px',
})

export const headerWrapper = style({
    width: '1600px',
    '@media': {
        'screen and (max-width: 1024px)': {
            width: '100%',
        },
    },
})
