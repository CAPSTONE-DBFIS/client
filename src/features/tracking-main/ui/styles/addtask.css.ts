import { colors } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const layout = style({
    height: '683px',
    width: '1019px',
    border: '1px solid black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxSizing: 'border-box',
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
