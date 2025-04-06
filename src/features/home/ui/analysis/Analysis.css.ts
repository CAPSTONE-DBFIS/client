import { style } from '@vanilla-extract/css'

export const container = style({
    '@media': {
        'screen and (max-width: 1024px)': {
            width: '100%',
            justifyContent: 'center',
        },
    },
})
