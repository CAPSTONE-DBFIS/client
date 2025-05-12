import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const HeaderSection = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const HeaderTeam = style({})

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
    background: colors['neutral-10'],
})

export const main = style({
    width: '1200px',
})
