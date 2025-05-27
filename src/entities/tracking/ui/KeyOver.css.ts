import { colors, shadows } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const graphContainer = style({
    width: '100%',
    height: 'auto',
    gap: '60px',
})

export const graph = style({
    padding: '16px 24px',
    width: '100%',
    background: colors.white,
    boxShadow: shadows.small,
    borderRadius: '5px',
})

export const textBox = style({
    background: colors.white,
    padding: '16px 24px',
    boxShadow: shadows.small,
    borderRadius: '5px',
})
