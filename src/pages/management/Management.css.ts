import { style } from '@vanilla-extract/css'

export const HeaderSection = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const HeaderTeam = style({})

export const layout = style({
    width: '1024px',
    padding: '36px 0px',

    '@media': {
        'screen and (max-width: 1024px)': {
            width: '100%',
        },
    },

    display: 'flex',
    justifyContent: 'space-between',
})

export const main = style({
    width: '710px',
})
