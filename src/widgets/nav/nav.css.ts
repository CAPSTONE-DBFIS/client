import { style, styleVariants } from '@vanilla-extract/css'
import { colors, fontWeights } from '@/app/token'

export const navContainer = style({
    gap: '20px',
})

export const listBox = style({
    cursor: 'pointer',
})

export const ulBox = style({
    gap: '59px',
})

export const logoBox = style({
    cursor: 'pointer',
})

const listTextBase = style({
    userSelect: 'none',
})
export const listText = styleVariants({
    default: [
        listTextBase,
        {
            fontWeight: fontWeights.regular,
            color: colors['neutral-300'],
        },
    ],
    selected: [
        listTextBase,
        {
            fontWeight: fontWeights.medium,
            color: colors['neutral-900'],
        },
    ],
})
