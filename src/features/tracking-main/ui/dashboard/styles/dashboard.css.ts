import { colors, shadows } from '@/app/token'
import { style } from '@vanilla-extract/css'

export const layout = style({
    marginTop: '30px',
    overflowY: 'auto',
})

export const deleteModal = style({
    padding: '20px',
    gap: '27px',
    width: '367px',
    height: '219px',
})
export const delBtn = style({
    border: `1px solid ${colors['red-300']} `,
    borderRadius: '12px',
    width: '100%',
    height: '43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
        '&:hover, &:active': {
            boxShadow: shadows['medium'],
        },
    },
})
export const backBtn = style({
    background: colors['teal-500'],
    border: `1px solid ${colors['teal-500']} `,
    borderRadius: '12px',
    display: 'flex',
    height: '43px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
        '&:hover, &:active': {
            boxShadow: shadows['medium'],
        },
    },
})
