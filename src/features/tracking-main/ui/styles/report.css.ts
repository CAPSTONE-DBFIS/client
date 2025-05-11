import { colors, shadows } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const graphContainer = style({
    width: '100%',
    height: '570px',
    gap: '60px',
})

export const graph = style({
    padding: '16px 24px',
    width: '100%',
    background: colors.white,
    boxShadow: shadows.small,
    borderRadius: '5px',
})

export const tap = style({
    borderBottom: `2px solid ${colors['neutral-20']}`,
    padding: '12px 257px',
})

export const taskBtn = style({
    height: '36px',
    padding: '12px 24px',
    borderRadius: '8px',
})

export const selectedTap = style({
    borderBottom: `2px solid ${colors['neutral-900']} !important`,
})

export const textBox = style({
    background: colors.white,
    padding: '16px 24px',
    boxShadow: shadows.small,
    borderRadius: '5px',
})
