import { colors, shadows } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const tap = style({
    borderBottom: `2px solid ${colors['neutral-20']}`,
    padding: '12px 240px',
    whiteSpace: 'nowrap',
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

export const teamWrapper = style({
    paddingTop: '8px',
    gap: '8px',
})

export const team = style({
    gap: '4px',
})

export const indicator = style({
    padding: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: `1px solid ${colors['neutral-20']}`,
    width: '36px',
    textAlign: 'center',
})
