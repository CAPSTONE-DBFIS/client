import { style } from '@vanilla-extract/css'

export const layout = style({
    width: '1600px',
    padding: '36px 0px',

    '@media': {
        'screen and (max-width: 1024px)': {
            width: '100%',
        },
    },

    display: 'flex',
    justifyContent: 'space-between',
})
