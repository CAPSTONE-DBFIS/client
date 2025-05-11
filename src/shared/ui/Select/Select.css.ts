import { colors } from '@/app/token'
import { style, styleVariants } from '@vanilla-extract/css'

export const container = style({
    position: 'relative',
})

export const wrapper = style({
    borderRadius: '6px',
    border: `1px solid ${colors['neutral-60']}`,

    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors['neutral-10'],

    position: 'absolute',
    zIndex: 10,
})
export const cell = style({
    padding: '6px 10px',
})
export const option = styleVariants({
    default: {},
    action: {
        ':hover': {
            backgroundColor: colors.white,
        },
    },
})
