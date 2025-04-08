import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '1024px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    backgroundColor: colors['neutral-10'],

    borderRadius: '20px',

    padding: '24px 82px',

    '@media': {
        'screen and (max-width: 1024px)': {
            width: '100%',
        },
    },
})

export const logoSpan = style({
    padding: '6px 7px',
    backgroundColor: colors['teal-500'],
    color: colors.white,
    borderRadius: '6px',
})
