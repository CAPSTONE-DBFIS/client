import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const layout = style({
    height: '43px',
    // border: '1px solid black',
    marginTop: '16px',
})

export const tap = style({
    padding: '12px 24px',
    borderBottom: `2px solid ${colors['neutral-20']}`,
})

export const taskBtn = style({
    height: '36px',
    padding: '12px 24px',
    borderRadius: '8px',
})

export const selectedTap = style({
    borderBottom: `2px solid ${colors['neutral-900']} !important`,
})
